export interface ICallback {
  [key: string]: any;
  fio: string;
  phone: string;
}

export interface ICallbackErrors {
  [key: string]: boolean | undefined;
  fio?: boolean;
  phone?: boolean;
}

export interface IProfile {
  [key: string]: string | undefined;
  timestamp?: string;
  fio?: string;
  phone?: string;
  license?: string;
  licenseDate?: string;
  licenseDateExpire?: string;
  carBrand?: string;
  carModel?: string;
  carColor?: string;
  carYear?: string;
  carRegNo?: string;
  carVin?: string;
  carSts?: string;
  type?: "JOB" | "LEASE"
}

export interface IProfileErrors {
  [key: string]: boolean | undefined;
  fio?: boolean;
  phone?: boolean;
  license?: boolean;
  licenseDate?: boolean;
  licenseDateExpire?: boolean;
  carBrand?: boolean;
  carModel?: boolean;
  carColor?: boolean;
  carYear?: boolean;
  carRegNo?: boolean;
  carVin?: boolean;
  carSts?: boolean;
}
