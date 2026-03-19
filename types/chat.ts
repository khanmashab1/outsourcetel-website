export interface ChatRoom {
  id: string;
  booking_id?: string;
  participant_ids: string[];
  created_at: string;
  updated_at: string;
  last_message?: Message;
  participants?: {
    id: string;
    full_name: string;
    avatar_url?: string;
    is_online: boolean;
  }[];
}

export interface Message {
  id: string;
  room_id: string;
  sender_id: string;
  content: string;
  message_type: "text" | "image" | "file";
  file_url?: string;
  is_read: boolean;
  created_at: string;
  sender?: {
    full_name: string;
    avatar_url?: string;
  };
}

export interface ChatState {
  rooms: ChatRoom[];
  activeRoom: ChatRoom | null;
  messages: Message[];
  loading: boolean;
}