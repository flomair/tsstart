export interface Loading{
    readonly fetching :boolean;
    readonly loaded: boolean;
    readonly failed : boolean;
    readonly message? : string;
}