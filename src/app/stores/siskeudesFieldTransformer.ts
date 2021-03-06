export const FIELD_ALIASES = {
    kegiatan: { 
        'kode_kegiatan':'Kd_Keg', 'kode_desa': 'Kd_Desa', 'tahun': 'Tahun', 
        'nama_kegiatan': 'Nama_Kegiatan', 'kode_bidang': 'Kd_Bid', 'nama_bidang': 'Nama_Bidang', 
        'lokasi': 'Lokasi', 'waktu': 'Waktu', 'id_kegiatan': 'ID_Keg',
        'nama_pptkd': 'Nm_PPTKD', 'nip_pptkd': 'NIP_PPTKD', 'keluaran': 'Keluaran',
        'pagu': 'Pagu', 'pagu_pak': 'Pagu_PAK', 'sumber_dana': 'Sumberdana'
    },
    rab: {
        'kode_rekening': 'Kode_Rekening', 'kode_kegiatan': 'Kd_Keg', 'uraian': 'Uraian', 'sumber_dana': 'SumberDana', 'jumlah_satuan': 'JmlSatuan', 'satuan': 'Satuan', 'harga_satuan': 'HrgSatuan',
        'anggaran': 'Anggaran', 'jumlah_satuan_pak': 'JmlSatuanPAK', 'harga_satuan_pak': 'HrgSatuanPAK', 'anggaran_pak': 'AnggaranStlhPAK', 'perubahan': 'AnggaranPAK'
    },
    spp: {
        'no': 'No_SPP', 'kode_desa': 'Kd_Desa', 'tahun': 'Tahun', 'tanggal': 'Tgl_SPP', 'jenis': 'Jn_SPP', 
        'keterangan': 'Keterangan', 'jumlah': 'Jumlah', 'potongan': 'Potongan', 'status': 'Status'
    },
    spp_rinci: {
        'kode': 'Kd_Rincian', 'no_spp':  'No_SPP', 'kode_desa': 'Kd_Desa', 'tahun': 'Tahun',
        'kode_kegiatan': 'Kd_Keg', 'sumber_dana': 'Sumberdana', 'nilai': 'Nilai'
    },
    spp_bukti: {
        'no': 'No_Bukti', 'kode_rincian': 'Kd_Rincian', 'no_spp': 'No_SPP', 'kode_desa': 'Kd_Desa', 'tahun': 'Tahun', 
        'kode_kegiatan': 'Kd_Keg', 'sumber_dana': 'Sumberdana', 'tanggal': 'Tgl_Bukti',
        'nama_penerima': 'Nm_Penerima', 'alamat': 'Alamat', 'rekening_bank': 'Rek_Bank', 'nama_bank': 'Nm_Bank',
        'npwp': 'NPWP', 'keterangan': 'Keterangan', 'nilai': 'Nilai',
    },
    tbp: {
        'tahun': 'Tahun', 'kode_desa': 'Kd_Desa', 'no': 'No_Bukti', 'tanggal': 'Tgl_Bukti', 
        'uraian': 'Uraian', 'nama_penyetor': 'Nm_Penyetor', 'alamat_penyetor': 'Alamat_Penyetor', 
        'ttd_penyetor': 'TTD_Penyetor', 'rekening_bank': 'NoRek_Bank', 'nama_bank': 'Nama_Bank',
        'jumlah': 'Jumlah', 'nama_bendahara': 'Nm_Bendahara', 'jabatan_bendahara': 'Jbt_Bendahara',
        'status': 'Status', 'kode_bayar': 'KdBayar', 'ref_bayar': 'Ref_Bayar',
    },
    tbp_rinci: {
        'tahun': 'Tahun', 'kode_desa': 'Kd_Desa', 'no_tbp': 'No_Bukti', 'kode': 'Kd_Rincian', 'rincian_sumber_dana': 'RincianSD',
        'kode_kegiatan': 'Kd_Keg', 'sumber_dana': 'SumberDana', 'nilai': 'Nilai', 'nama_rekening': 'Nama_Obyek', 
    },
    rkp: {
        'kode_bidang':'Kd_Bid', 'nama_bidang': 'Nama_Bidang', 'kode_kegiatan': 'Kd_Keg','nama_kegiatan': 'Nama_Kegiatan', 'lokasi_spesifik': 'Lokasi_Spesifik',
        'volume': 'Volume', 'satuan': 'Satuan', 'jumlah_sasaran_pria': 'Jml_Sas_Pria',
        'jumlah_sasaran_wanita': 'Jml_Sas_Wanita','jumlah_sasaran_rumah_tangga':'Jml_Sas_ARTM', 'sumber_dana': 'Kd_Sumber', 'waktu': 'Waktu',
        'tanggal_mulai': 'Mulai', 'tanggal_selesai': 'Selesai', 'anggaran': 'Biaya', 'pola_kegiatan': 'Pola_Kegiatan',
        'pelaksana': 'Pelaksana', 'kode_tahun': 'Kd_Tahun', 'kode_desa': 'Kd_Desa'
    },
    rpjm: {
        'kode_bidang': 'Kd_Bid','nama_bidang': 'Nama_Bidang', 'kode_kegiatan': 'Kd_Keg', 'nama_kegiatan': 'Nama_Kegiatan', 'kode_sasaran': 'Kd_Sas', 
        'uraian_sasaran': 'Uraian_Sasaran','keluaran': 'Keluaran','sasaran': 'Sasaran', 'tahun_1': 'Tahun1', 'tahun_2': 'Tahun2', 'tahun_3': 'Tahun3', 'tahun_4': 'Tahun4',
        'tahun_5': 'Tahun5', 'tahun_6': 'Tahun6', 'swakelola': 'Swakelola', 'kerjasama': 'Kerjasama', 'pihak_ketiga': 'Pihak_Ketiga',
        'kode_desa': 'Kd_Desa', 'id_kegiatan': 'ID_Keg', 'lokasi': 'Lokasi', 'sumber_dana': 'Sumberdana'
    },
    rincian_tbp: {
        'tahun': 'Tahun', 'kode_desa': 'Kd_Desa', 'kode_rekening': 'Kd_Rincian', 'sumber_dana': 'SumberDana',
        'nilai': 'Nilai', 'nama_rekening': 'Nama_Obyek', 'kode_kegiatan': 'Kd_Keg'
    },
    desa: { 
        'tahun': 'Tahun', 'kode_desa': 'Kd_Desa','jabatan_kades': 'Jbt_Kades','nama_sekdes': 'Nm_Sekdes',
        'nip_sekdes': 'NIP_Sekdes','jabatan_sekdes': 'Jbt_Sekdes','nama_kaur': 'Nm_Kaur_Keu','jabatan_kaur': 'Jbt_Kaur_Keu',
        'nama_bendahara':  'Nm_Bendahara','jabatan_bendahara': 'Jbt_Bendahara','no_perdes': 'No_Perdes','tanggal_perdes': 'Tgl_Perdes',
        'no_perdes_pb': 'No_Perdes_PB','tanggal_perdes_pb': 'Tgl_Perdes_PB','no_perdes_pj': 'No_Perdes_PJ','tanggal_perdes_pj': 'Tgl_Perdes_PJ',
        'alamat': 'Alamat','status': 'Status', 'npwp': 'NPWP', 'nama_kecamatan': 'Nama_Kecamatan', 'nama_desa': 'Nama_Desa', 'ibu_kota': 'Ibukota',
        'kode_kecamatan': 'Kd_Kec', 'nama_kades': 'Nm_Kades'
    },
    sisa_anggaran: {
        'tahun': 'Tahun', 'kode_desa': 'Kd_Desa', 'kode_kegiatan': 'Kd_Keg', 'kode_rincian': 'Kd_Rincian', 'nama_rincian': 'Nama_Rincian', 'sumber_dana': 'SumberDana', 'sisa': 'Sisa' 
    },
    posting_log: {
        'tahun': 'Tahun', 'kode_desa': 'Kd_Desa','nama_desa': 'Nama_Desa', 'kode_posting': 'KdPosting', 'no_perdes': 'No_Perdes','tanggal_posting': 'TglPosting' ,'user_id': 'UserID','kunci': 'Kunci'
    },
    sts: {
        'tahun': 'Tahun', 'no':'No_Bukti', 'tanggal':'Tgl_Bukti', 'kode_desa':'Kd_Desa','uraian': 'Uraian', 'rekening_bank': 'NoRek_Bank',
        'nama_bank': 'Nama_Bank', 'jumlah': 'Jumlah', 'nama_bendahara': 'Nm_Bendahara', 'jabatan_bendahara': 'Jbt_Bendahara'
    },
    sts_rinci: {
        'tahun': 'Tahun','kode_desa':'Kd_Desa', 'no_bukti':'No_Bukti', 'no_tbp':'No_TBP', 'uraian': 'Uraian', 'nilai': 'Nilai'
    },
    visi: {
        'id_visi': 'ID_Visi', 'kode_desa': 'Kd_Desa', 'no': 'No_Visi', 'uraian': 'Uraian_Visi', 'tahun_awal': 'TahunA', 'tahun_akhir': 'TahunN'
    },
    ref_kegiatan: {
        'id_kegiatan': 'ID_Keg', 'kode_bidang': 'Kd_Bid', 'nama_kegiatan': 'Nama_Kegiatan'
    },
    ref_bidang: {
        'kode_bidang': 'Kd_Bid','nama_bidang': 'Nama_Bidang'
    },
    pemda: {
        'tahun': "Tahun",'kode_provinsi': "Kd_Prov",'kode_kabupaten': "Kd_Kab",'nama_pemda':"Nama_Pemda",'nama_provinsi':"Nama_Provinsi",
        'ibukota': "Ibukota",'alamat_pemda': "Alamat",'nama_bupati':"Nm_Bupati",'jabatan_bupati':"Jbt_Bupati",'logo_pemda':"Logo",
        'c_kode':"C_Kode",'c_pemda':"C_Pemda",'c_data':"C_Data"
    },
    pencairan_spp: {
        'tahun': "Tahun", 'no': "No_Cek", 'no_spp': "No_SPP", 'tanggal': "Tgl_Cek", 'kode_desa': "Kd_Desa", 'keterangan': "Keterangan", 
        'jumlah': "Jumlah", 'potongan': "Potongan", 'kode_bayar': "KdBayar"
    }
}

export const REVERSE_ALIASES = {};
Object.keys(FIELD_ALIASES).forEach(entity => {
    REVERSE_ALIASES[entity] = {};
    let aliases = FIELD_ALIASES[entity];
    Object.keys(aliases).forEach(key => {
        let value = aliases[key];
        REVERSE_ALIASES[entity][value] = key;
    });
});

export function fromSiskeudes(source, entityName){
    let aliases = REVERSE_ALIASES[entityName];
    let result = {};
    let keys = Object.keys(source); 
    keys.forEach(key => {
        if(!aliases[key]){
            console.log("no alias for: ", key, aliases);
            return;
        }
        result[aliases[key]] = source[key];
    })
    return result;
}

export function toSiskeudes(source, entityName): any {
    let result = {};
    let keys = Object.keys(source);
    keys.forEach(key => {
        result[FIELD_ALIASES[entityName][key]] = source[key];
    })
    return result;
}