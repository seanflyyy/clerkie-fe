export interface Friend {
  name: string;
  state: FriendState;
  email: string;
  phone: string;
};

export enum FriendState {
  CLOSE_FRIENDS = 0,
  SUPER_CLOSE_FRIENDS = 1,
  NONE = 2,
}