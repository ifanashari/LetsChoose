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

export class table{
    table:string;
}
