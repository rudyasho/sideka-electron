export const FIELD_ALIASES = {
    kegiatan: { 
        'kode_kegiatan':'Kd_Keg', 'nama_kegiatan': 'Nama_Kegiatan', 'kode_bidang': 'Kd_Bid', 'nama_bidang': 'Nama_Bidang', 'lokasi': 'Lokasi', 'waktu': 'Waktu', 'nama_pptkd': 'Nm_PPTKD', 'keluaran': 'Keluaran','pagu': 'Pagu', 'pagu_pak': 'Pagu_PAK'
    },
    rab: {
        'kode_rekening': 'Kode_Rekening', 'kode_kegiatan': 'Kd_Keg', 'uraian': 'Uraian', 'sumber_dana': 'SumberDana', 'jumlah_satuan': 'JmlSatuan', 'satuan': 'Satuan', 'harga_satuan': 'HrgSatuan',
        'anggaran': 'Anggaran', 'jumlah_satuan_pak': 'JmlSatuanPAK', 'harga_satuan_pak': 'HrgSatuanPAK', 'anggaran_pak': 'AnggaranStlhPAK', 'perubahan': 'AnggaranPAK'
    },
    spp: {
        'no': 'No_SPP', 'tanggal': 'Tgl_SPP', 'jenis': 'Jn_SPP', 'keterangan': 'Keterangan',
        'jumlah': 'Jumlah', 'potongan': 'Potongan', 'tahun': 'Tahun', 'kode_desa': 'Kd_Desa'
    },
    sppRinci: {
        'no': 'No_SPP', 'tanggal': 'Tgl_SPP', 'jenis': 'Jn_SPP', 'keterangan': 'Keterangan',
        'jumlah': 'Jumlah', 'potongan': 'Potongan', 'tahun': 'Tahun', 'kode_desa': 'Kd_Desa'
    },
    sppBukti: {
        'no': 'No_SPP', 'tanggal': 'Tgl_SPP', 'jenis': 'Jn_SPP', 'keterangan': 'Keterangan',
        'jumlah': 'Jumlah', 'potongan': 'Potongan', 'tahun': 'Tahun', 'kode_desa': 'Kd_Desa'
    },
    sppPotongan: {
        'no': 'No_SPP', 'tanggal': 'Tgl_SPP', 'jenis': 'Jn_SPP', 'keterangan': 'Keterangan',
        'jumlah': 'Jumlah', 'potongan': 'Potongan', 'tahun': 'Tahun', 'kode_desa': 'Kd_Desa'
    },
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

export function valueToPropName(obj): any{
    let result = {};
    Object.keys(obj).forEach(key => {
        result[obj[key]] = key
    });
    return result
}
