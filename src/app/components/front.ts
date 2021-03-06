import { remote, ipcRenderer } from 'electron';
import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import DataApiService from '../stores/dataApiService';
import SharedService from '../stores/sharedService';

import * as $ from 'jquery';
import * as os from "os";

import titleBar from '../helpers/titleBar';
import SyncService from '../stores/syncService';
import { Router } from '@angular/router';
var pjson = require('../../../package.json');

declare var ENV: string;

@Component({
    selector: 'front',
    templateUrl: '../templates/front.html',
})
export default class FrontComponent implements OnInit, OnDestroy{
    package: any;
    isSipbmActive: boolean;
    platform: string;
    env: string;

    getDesaSubscription;

    loginUsername: string;
    loginPassword: string;
    loginErrorMessage: string;

    constructor(
        private dataApiService: DataApiService,
        private sharedService: SharedService,
        private router: Router
	) {
        this.env = ENV;
        this.platform = os.platform();
    }

    ngOnInit() {
        setTimeout(function(){
            $("front > div").addClass("slidein");
        }, 1000);

        titleBar.initializeButtons();
        titleBar.normal();

        this.package = pjson;
        this.isSipbmActive = false;

        if (this.dataApiService.auth) {
            this.dataApiService.checkAuth();
        }

        this.getDesaSubscription = this.dataApiService.getDesa().subscribe(desa => {                
            if(desa){
                if(desa.kode && desa.kode.startsWith('33.29.')){
                    this.isSipbmActive = true;
                }
            }
        });

        ipcRenderer.on('updater', (event, type, arg) => {
            console.log(event, type, arg);
            if (type == 'update-downloaded') {
                $('#updater-version').html(arg.releaseName);
                $('#updater').show();
            }
        });

        $('#updater-btn').click(function () {
            ipcRenderer.send('updater', 'quitAndInstall');
        });

    }

    ngOnDestroy(){
        $("front > div").removeClass("slidein");
        if(this.getDesaSubscription){
            this.getDesaSubscription.unsubscribe();
            this.getDesaSubscription = null;
        }
    }

    login() {
        this.loginErrorMessage = null;
        
        this.dataApiService.login(this.loginUsername, this.loginPassword).subscribe(
            data => {
                let oldDesaId = this.dataApiService.getContentMetadata('desa_id');
                if (oldDesaId && oldDesaId !== data.desa_id) {
                    let unsavedDiffs = this.dataApiService.getUnsavedDiffs(['penduduk', 'map']);

                    if (unsavedDiffs.length > 0) {
                        let dialog = remote.dialog;
                        let choice = dialog.showMessageBox(remote.getCurrentWindow(),
                            {
                                type: 'question',
                                buttons: ['Batal', 'Hapus Data Offline'],
                                title: 'Hapus Penyimpanan Offline',
                                message: 'Anda berganti desa tetapi data desa sebelumnya masih tersimpan secara offline. Hapus data offline tersebut?'
                            });
                        if (choice == 0)
                            return;
                    }

                    this.dataApiService.rmDirContents(this.sharedService.getContentDirectory());
                }
            },
            error => {
                let errors = error.split('-');

                if(errors[0].trim() === '403')
                    this.loginErrorMessage = 'User anda salah';
                else if(errors[0].trim() === '401')
                    this.loginErrorMessage = 'Password anda salah';
                else
                    this.loginErrorMessage = 'Terjadi kesalahan pada server';
            }
        );
        return false;
    }

    logout() {
        this.dataApiService.logout();
        this.router.navigateByUrl('/');
        return false;
    }
}
