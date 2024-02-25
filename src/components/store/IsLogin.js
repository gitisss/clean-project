import { makeObservable, observable } from "mobx";

class IsLogin{

isLogin = false;

constructor(){
makeObservable(this, {
    isLogin: observable
});
}

}
export default new IsLogin();