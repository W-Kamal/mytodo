export interface item {
  id:string;
  label:string;
  status:Status;
  created_at:Date;
  validated:boolean;
}

enum Status {
  pending='pending',
  validate='validate',
  cancelled='cancelled',
}