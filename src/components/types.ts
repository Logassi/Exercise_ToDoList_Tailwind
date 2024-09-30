export interface ITask {
    id : number,
    task : string,
    isCompleteCheck : boolean
    deleteTodo: (id: number) => void;
    onToggleCompletion: (id: number) => void;
}
