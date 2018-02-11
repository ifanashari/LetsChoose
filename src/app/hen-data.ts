export class user {
    id_user:string;
    username:string;
    password:string;
    email:string;
}

export class admin{
    id_admin:number;
    username:string;
    password:string;
    email:string;
}

export class login{
    username:string;
    password:string;
}

export class tokCho{
    token:string;
}

export class ruang {
    id_ruang:string;
    token_ruang:string;
    judul_ruang:string;
    deskripsi:string;
    id_admin:string;
}

export class calon {
    id_calon:string;
    nama_calon:string;
    visi:string;
    misi:string;
    id_ruang:string;
}

export class photo {
    img: string|any;
}

export class table{
    table:string;
}
