export class Block {
  constructor(
    public hash: string,
    public time: number,
    public block_index: number,
    public height: number,
    public txIndexes: number[],
  ) {}
}
