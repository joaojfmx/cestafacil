export interface User {
    uid: string;
    nome: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    pws: string;
    ativo: boolean = true;
    myCustomData?: string;
  }
