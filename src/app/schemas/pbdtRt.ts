import * as renderers from './renderers';
import { SchemaColumn } from "./schema";
import { chosenRenderer } from './renderers';

import editors from './editors';

let schema: SchemaColumn[] = [
     {
        header: 'Id',
        field: 'id', 
        width: 0,
        type: 'text',
        readOnly: true
    },
    
    {
        header: 'Provinsi',
        field: 'provinsi',
        width: 100,
        type: 'text',
        category: { id: 'region', label: 'Wilayah'}
    },
    {
        header: 'Kabupaten/Kota',
        field: 'kabupaten',
        width: 150,
        type: 'text',
        category: { id: 'region', label: 'Wilayah'}
    },
    {
        header: 'Kecamatan',
        field: 'kecamatan',
        width: 100,
        type: 'text',
        category: { id: 'region', label: 'Wilayah'}
    },
    {
        header: 'Desa/Kelurahan',
        field: 'desa_kelurahan',
        width: 150,
        type: 'text',
        category: { id: 'region', label: 'Wilayah'}
    },
    {
        header: 'Alamat',
        field: 'alamat',
        width: 200,
        type: 'text',
        category: { id: 'region', label: 'Wilayah'}
    },
    {
        header: 'Nama KRT',
        field: 'nama_krt',
        width: 250,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Jenis Kelamin KRT',
        field: 'jenis_kelamin',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: { data: [{
                id: 1,
                label: 'Laki - laki'
            },{
                id: 2,
                label: 'Perempuan'
        }]},
        width: 130,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Umur KRT',
        field: 'umur',
        width: 80,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Pendidikan Tertinggi',
        field: 'jenjang_pendidikan_tertinggi',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data: [{
                id: 1,
                label: 'SD/SDLB'
            },{
                id: 2,
                label: 'Paket A'
            },{
                id: 3,
                label: 'M. Ibtidaiyah'
            },{
                id: 4,
                label: 'SMP/SMPLB'
            },{
                id: 5,
                label: 'Paket B'
            },{
                id: 6,
                label: 'M. Tsanawiyah'
            },{
                id: 7,
                label: 'SMA/SMK/SMALB'
            },{
                id: 8,
                label: 'M. Aliyah'
            },{
                id: 9,
                label: 'Paket C'
            },{
                id: 10,
                label: 'Perguruan Tinggi'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Lapangan Usaha',
        field: 'lapangan_usaha',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data: [{
                id: 1,
                label: 'Pertanian tanaman padi & palawija'
            },{
                id: 2,
                label: 'Hortikultura'
            },{
                id: 3,
                label: 'Perkebunan'
            },{
                id: 4,
                label: 'Perikanan tangkap'
            },{
                id: 5,
                label: 'Perikanan budidaya'
            },{
                id: 6,
                label: 'Peternakan'
            },{
                id: 7,
                label: 'Kehutanan & pertanian lainnya'
            },{
                id: 8,
                label: 'Pertambangan/penggalian'
            },{
                id: 9,
                label: 'Industri pengolahan'
            },{
                id: 10,
                label: 'Listrik dan gas'
            },{
                id: 11,
                label: 'Bangunan/Konstruksi'
            },{
                id: 12,
                label: 'Perdagangan'
            },{
                id: 13,
                label: 'Hotel & Rumah makan'
            },{
                id: 14,
                label: 'Transportasi & Pergudangan'
            },{
                id: 15,
                label: 'Informasi & Komunaksi'
            },{
                id: 16,
                label: 'Keuangan & asuransi'
            },{
                id: 17,
                label: 'Jasa pendidikan'
            },{
                id: 18,
                label: 'Jasa kesehatan'
            },{
                id: 19,
                label: 'Jasa kemasyarakatan, pemerintahan & perorangan'
            },{
                id: 20,
                label: 'Pemulung'
            },{
                id: 21,
                label: 'Lainnya'
        }]},
        width: 200,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Kedudukan Pekerjaan',
        field: 'status_kedudukan',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data: [{
                id: 1,
                label: 'Berusaha sendiri'
            },{
                id: 2,
                label: 'Berusaha dibantu buruh tidak tetap/tidak dibayar'
            },{
                id: 3,
                label: 'Berusaha dibantu buruh tetap/dibayar'
            },{
                id: 4,
                label: 'Buruh/karyawan/pegawai swasta'
            },{
                id: 5,
                label: 'PNS/TNI/Polri/BUMN/BUMD/anggota legislatif'
            },{
                id: 6,
                label: 'Pekerja bebas pertanian'
            },{
                id: 7,
                label: 'Pekerja bebas non-pertanian'
            },{
                id: 8,
                label: 'Pekerja keluarga/tidak dibayar'
        }]},
        width: 200,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Bangunan Rumah',
        field: 'status_bangunan',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data: [{
                id: 1,
                label: 'Milik sendiri'
            }, {
                id: 2,
                label: 'Kontrak/sewa'
            },{
                id: 3,
                label: 'Bebas sewa'
            },{
                id: 4,
                label: 'Dinas'
            },{
                id: 5,
                label: 'Lainnya'
        }]},
        width: 130,
        type: 'text',
        category: { id: 'krt', label: 'Kepala Rumah Tangga'}
    },
    {
        header: 'Lahan Rumah',
        field: 'status_lahan',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data: [{
                id: 1,
                label: 'Milik sendiri'
            },{
                id: 2,
                label: 'Milik orang lain'
            },{
                id: 3,
                label: 'Tanah negara'
            },{
                id: 4,
                label: 'Lainnya'
        }]},
        width: 130,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Luas Lantai',
        field: 'luas_lantai',
        type: 'text',
        width: 100,
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Jenis Lantai',
        field: 'jenis_lantai_terluas',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data: [{
                id: 1,
                label: 'Marmer/granit'
            },{
                id: 2,
                label: 'Keramik'
            }, {
                id: 3,
                label: 'Parket/vinil/permadani'
            },{
                id: 4,
                label: 'Ubin/tegel/teraso'
            },{
                id: 5,
                label: 'Kayu/papan kualitas tinggi'
            },{
                id: 6,
                label: 'Semen/bata merah'
            },{
                id: 7,
                label:  'Bambu'
            },{
                id: 8,
                label: 'Kayu/papan kualitas rendah'
            },{
                id: 9,
                label: 'Tanah'
            },{
                id: 10,
                label: 'Lainnya'
        }]},
        width: 120,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Jenis Dinding',
        field: 'jenis_dinding_terluas',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Tembok'
            },{
                id: 2,
                label: 'Plesteran anyaman bambu/kawat'
            },{
                id: 3,
                label: 'Kayu'
            },{
                id: 4,
                label: 'Anyaman bambu'
            },{
                id: 5,
                label: 'Batang kayu'
            },{
                id: 6,
                label: 'Bambu'
            },{
                id: 7,
                label: 'Lainnya'
        }]},
        width: 120,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Kondisi Dinding',
        field: 'kondisi_dinding',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Bagus/kualitas tinggi'
            },{
                id: 2,
                label: 'Jelek/kualitas rendah'
        }]},
        width: 130,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Jenis Atap',
        field: 'jenis_atap_terluas',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions:  {data:[{
                id: 1,
                label: 'Beton/genteng betoni'
            },{
                id: 2,
                label: 'Genteng keramik'
            },{
                id: 3,
                label: 'Genteng metal'
            },{
                id: 4,
                label: 'Genteng tanah liat'
            },{
                id: 5,
                label: 'Asbes'
            },{
                id: 6,
                label: 'Seng'
            },{
                id: 7,
                label: 'Sirap'
            },{
                id: 8,
                label: 'Bambu'
            },{
                id: 9,
                label: 'Jerami/ijuk/daun daunan/rumbia'
            },{
                id: 10,
                label: 'Lainnya'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Kondisi Atap',
        field: 'kondisi_atap',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Bagus/kualitas tinggi'
            },{
                id: 2,
                label: 'Jelek/kualitas rendah'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Jml Kamar Tidur',
        field: 'jumlah_kamar_tidur',
        type: 'text',
        width: 150,
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Sumber Air Minum',
        field: 'sumber_air_minum',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Air kemasan bermerk'
            },{
                id: 2,
                label: 'Air isi ulang'
            },{
                id: 3,
                label: 'Leding meteran'
            },{
                id: 4,
                label: 'Leding eceran'
            },{
                id: 5,
                label: 'Sumur bor/pompa'
            },{
                id: 6,
                label: 'Sumur terlindung'
            },{
                id: 7,
                label: 'Sumur tak terlindung'
            },{
                id: 8,
                label: 'Mata air terlindung'
            },{
                id: 9,
                label: 'Mata air tak terlindung'
            },{
                id: 10,
                label: 'Air sungai/danau/waduk'
            },{
                id: 11,
                label: 'Air hujan'
            },{
                id: 12,
                label: 'Lainnya'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Cara Memperoleh Air Minum',
        field: 'cara_memperoleh_air_minum',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Membeli eceran'
            },{
                id: 2,
                label: 'Langganan'
            },{
                id: 3,
                label: 'Tidak membeli'
        }]},
        width: 200,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Penerangan Utama',
        field: 'sumber_penerangan_utama',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Listrik PLN'
            },{
                id: 2,
                label: 'Listrik non PLN'
            },{
                id: 3,
                label: 'Bukan listrik'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Daya Listrik',
        field: 'daya_listrik_terpasang',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: '450 watt'
            },{
                id: 2,
                label: '900 watt'
            },{
                id: 3,
                label: '1300 watt'
            },{
                id: 4,
                label: '2200 watt'
            },{
                id: 5,
                label: '> 2200 watt'
            },{
                id: 6,
                label: 'Tanpa meteran'
        }]},
        width: 130,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Bahan Bakar Masak',
        field: 'bahan_bakar_untuk_memasak',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Listrik'
            },{
                id: 2,
                label: 'Gas > 3 kg'
            },{
                id: 3,
                label: 'Gas 3 kg'
            },{
                id: 4,
                label: 'Gas kota/biogas'
            },{
                id: 5,
                label: 'Minyak tanah'
            },{
                id: 6,
                label: 'Briket'
            },{
                id: 7,
                label: 'Arang'
            },{
                id: 8,
                label: 'Kayu bakar'
            },{
                id: 9,
                label: 'Tidak memasak di rumah'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Fasilitas BAB',
        field: 'penggunaan_fasilitas_bab',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Sendiri'
            },{
                id: 2,
                label: 'Bersama'
            },{
                id: 3,
                label: 'Umum'
            },{
                id: 4,
                label: 'Tidak ada'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Jenis Kloset',
        field: 'jenis_kloset',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Leher angsa'
            },{
                id: 2,
                label: 'Plengsengan'
            },{
                id: 3,
                label: 'Cemplung/cebluk'
            },{
                id: 4,
                label: 'Tidak pakai'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Pembuangan Tinja',
        field: 'tempat_pembuangan_akhir_tinja',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Tangki'
            },{
                id: 2,
                label: 'SPAL'
            },{
                id: 3,
                label: 'Lubang tanah'
            },{
                id: 4,
                label: 'Kolam/sawah/sungai/danau/laut'
            },{
                id: 5,
                label: 'Pantai/tanah lapang/kebun'
            },{
                id: 6,
                label: 'Lainnya'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'perumahan', label: 'Keterangan Perumahan'}
    },
    {
        header: 'Tabung Gas > 5,5kg',
        field: 'tabung_gas_5_5_kg_atau_lebih',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Lemari Es',
        field: 'lemari_es',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'AC',
        field: 'ac',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Pemanas air',
        field: 'pemanas_air',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Telepon rumah',
        field: 'telepon_rumah',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Televisi',
        field: 'televisi',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Perhiasan/Tabungan',
        field: 'emas_perhiasan_tabungan',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
     {
        header: 'Komputer',
        field: 'komputer_laptop',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
     {
        header: 'Sepeda',
        field: 'sepeda',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Sepeda motor',
        field: 'sepeda_motor',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
     {
        header: 'Mobil',
        field: 'mobil',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
     {
        header: 'Perahu',
        field: 'perahu',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    }, {
        header: 'Motor Tempel',
        field: 'motor_tempel',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },{
        header: 'Perahu Motor',
        field: 'perahu_motor',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Kapal',
        field: 'kapal',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jml Nomor HP Aktif',
        field: 'jumlah_nomor_hp_aktif',
        type: 'text',
        width: 150,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jml TV 30inch',
        field: 'jumlah_tv_layar_datar_30_inch',
        type: 'text',
        width: 150,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Aset lahan',
        field: 'aset_lahan',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Luas lahan',
        field: 'luas_lahan',
        type: 'text',
        width: 100,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Rumah di tempat lain',
        field: 'rumah_di_tempat_lain',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jumlah Sapi',
        field: 'jumlah_sapi',
        type: 'text',
        width: 100,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jumlah Kerbau',
        field: 'jumlah_kerbau',
        type: 'text',
        width: 100,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jumlah Kuda',
        field: 'jumlah_kuda',
        type: 'text',
        width: 100,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jumlah Babi',
        field: 'jumlah_babi',
        type: 'text',
        width: 100,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'Jumlah Kambing',
        field: 'jumlah_kambing',
        type: 'text',
        width: 100,
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'ART memiliki usaha sendiri/bersama',
        field: 'art_memiliki_usaha_sendiri',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 250,
        type: 'text',
        category: { id: 'aset', label: 'Kepemilikan Aset'}
    },
    {
        header: 'KKS/KPS',
        field: 'kks_kps',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
     {
        header: 'KIP/BSM',
        field: 'kip_bsm',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'KIS/BPJS/Jamkesmas',
        field: 'kis_bpjs',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'BPJS mandiri',
        field: 'bpjs_mandiri',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'Jamsostek',
        field: 'jamsostek',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'Asuransi kesehatan',
        field: 'asuransi',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'PKH',
        field: 'pkh',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'Raskin',
        field: 'raskin',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 3,
                label: 'Ya'
            },{
                id: 4,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'KUR',
        field: 'kur',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 100,
        type: 'text',
        category: { id: 'program', label: 'Kartu Program'}
    },
    {
        header: 'Nomor urut ART WUS',
        field: 'nomor_urut_wus',
        type: 'text',
        width: 200
    },
    {
        header: 'Usia kawin suami WUS',
        field: 'usia_kawin_suami_wus',
        type: 'text',
        width: 200,
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Usia kawin istri WUS',
        field: 'usia_kawin_istri_wus',
        type: 'text',
        width: 200,
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Peserta KB WUS',
        field: 'peserta_kb_wus',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya'
            },{
                id: 2,
                label: 'Tidak'
        }]},
        width: 150,
        type: 'text',
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Metode Kontrasepsi WUS',
        field: 'metode_kontrasepsi_wus',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'IUD'
            },{
                id: 2,
                label: 'MOW'
            },{
                id: 3,
                label: 'MOP'
            },{
                id: 4,
                label: 'Implant'
            },{
                id: 5,
                label: 'Suntik'
            },{
                id: 6,
                label: 'Pil'
            },{
                id: 7,
                label: 'Kondom'
            },{
                id: 8,
                label: 'Tradisional'
        }]},
        width: 200,
        type: 'text',
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Lama kontrasepsi tahun WUS',
        field: 'lama_kontrasepsi_tahun_wus',
        type: 'text',
        width: 250,
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Lama kontrasepsi bulan WUS',
        field: 'lama_kontrasepsi_bulan_wus',
        type: 'text',
        width: 250,
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Tempat pelayanan KP WUS',
        field: 'tempat_pelayanan_kb',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'RS Pemerintah'
            },{
                id: 2,
                label: 'RS Swasta'
            },{
                id: 3,
                label: 'Klinik Utama/Pratama'
            },{
                id: 4,
                label: 'Prakter Dokter'
            },{
                id: 5,
                label: 'Praktek Bidan'
            },{
                id: 6,
                label: 'Puskesmas/Poskesdes/Polindes'
            },{
                id: 7,
                label: 'Pustu/Pusling/Bidan Desa'
            },{
                id: 8,
                label: 'Lainnya'
        }]},
        width: 250,
        type: 'text',
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Ingin punya anak lagi WUS',
        field: 'ingin_punya_anak_lagi',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Ya, segera (kurang dari 2 tahun)'
            },{
                id: 2,
                label: 'Ya, kemudian (lebih dari 2 tahun)'
            },{
                id: 3,
                label: 'Tidak ingin punya anak lagi'
        }]},
        width: 250,
        type: 'text',
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Alasan tidak KB WUS',
        field: 'alasan_tidak_kb_wus',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Sedang hamil'
            },{
                id: 2,
                label: 'Alasan fertilitas'
            },{
                id: 3,
                label: 'Tidak menyetujui KB'
            },{
                id: 4,
                label: 'Tidak tahu tentang KB'
            },{
                id: 5,
                label: 'Tidak mampu/mahal'
            },{
                id: 6,
                label: 'Ingin punya anak'
            },{
                id: 6,
                label: 'Lainnya'
        }]},
        width: 250,
        type: 'text',
        category: { id: 'wus', label: 'Wanita Usia Subur'}
    },
    {
        header: 'Jumlah Anggota Rumah Tangga',
        field: 'jumlah_anggota_rumah_tangga',
        type: 'text',
        width: 250,
        category: { id: 'rt', label: 'Rumah Tangga'}
    },
    {
        header: 'Jumlah Keluarga',
        field: 'jumlah_keluarga',
        type: 'text',
        width: 250,
        category: { id: 'rt', label: 'Rumah Tangga'}
    },
    {
        header: 'Status Kesejahteraan',
        field: 'status_kesejahteraan',
        renderer: chosenRenderer,
        editor: editors.chosen,
        chosenOptions: {data:[{
                id: 1,
                label: 'Gembel'
            },{
                id: 2,
                label: 'Cukup Sejahtera'
            },{
                id: 3,
                label: 'Sejahtera'
            },{
                id: 4,
                label: 'Sangat Sejahtera'
            },{
                id: 5,
                label: 'Tidak mampu/mahal'
            },{
                id: 6,
                label: 'Ingin punya anak'
            },{
                id: 6,
                label: 'Lainnya'
        }]},
        width: 250,
        type: 'text',
        category: { id: 'rt', label: 'Rumah Tangga'}
    },
    {
        header: 'Nomor Urut Rumah Tangga',
        field: 'nomor_urut_rumah_tangga',
        type: 'text',
        width: 250,
        category: { id: 'rt', label: 'Rumah Tangga'}
    },
    {
        header: 'Status',
        field: 'status',
        width: 150,
        type: 'dropdown',
        source: ['', 'Terverifikasi', 'Terbarui'],
        readOnly: true
    },{
        header: 'Tgl. Verifikasi',
        field: 'verification_date',
        width: 150,
        type: 'date',
        dateFormat: 'DD/MM/YYYY',
        readOnly: true
    },{
        header: 'Petugas',
        field: 'verified_by',
        width: 150,
        type: 'text',
        readOnly: true
    }
];

export default schema;