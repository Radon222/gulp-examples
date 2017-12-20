import Second from "./Second";

export default class Main {

    public static Run = (): void => {
        let second = new Second();
        second.data = 5;
        console.log("Running typescript");
    }
}
