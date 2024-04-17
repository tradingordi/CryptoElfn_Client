import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('LoadingScene')
export class LoadingScene extends Component {
    @property({type:Node})
    private dialogNode:Node = null
    @property({type:Node})
    private starGameBtn:Node = null
    @property({type:Node})
    private unStarGameBtn:Node = null

    private showStar:boolean = false
    start() {
       this.unStarGameBtn.active = !this.showStar
       this.starGameBtn.active = this.showStar
    }

    update(deltaTime: number) { }
    
    createWallet() {
        console.log("连接钱包，使用谷歌账户创建钱包，返回钱包信息")
        this.showStar = true
        this.unStarGameBtn.active = false
    }

    walletCallback() {
        //钱包信息
        console.log("根据钱包获取，用户游戏角色信息")
        Editor.Panel.open("vue3-wallet")
    }

    clickWallet() {
        console.log("连接钱包，获取钱包信息")
        this.showStar = true
        this.unStarGameBtn.active = !this.showStar
        this.dialogNode.active = true
    }
}

