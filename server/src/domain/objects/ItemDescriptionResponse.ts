export default interface ItemDescriptionResponse {
  text: string;
  plain_text: string;
  last_updated: Date;
  date_created: Date;
  snapshot: {
    url: string;
    width: number;
    height: number;
    status: string;
  };
}
