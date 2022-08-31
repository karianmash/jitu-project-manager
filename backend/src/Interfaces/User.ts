export interface User {
  id: string;
  role: string;
  user_name: string;
  email: string;
  password?: string;
  assigned_project: string;
  is_sent_email?: string;
}
