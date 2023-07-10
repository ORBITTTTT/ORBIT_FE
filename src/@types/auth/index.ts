export interface AuthState {
  userProfileImage?: string;
  userNickname?: string;
  userPositions?: string;
  userInterestStacks?: {stackName?: string | null | undefined }[];
  userIntroduce?: string;
  userLinks?: {
    profileLinkTitle?: string | null | undefined;
    profileLink?: string | null | undefined;
  }[];
}