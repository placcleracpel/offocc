import { _decorator, Component, WebView } from 'cc';
const { ccclass, type } = _decorator;

@ccclass('MyComponent')
export class MyComponent extends Component {
    @type(WebView)
    webview = null;

    start() {
        this.webview.node.on(WebView.EventType.LOADED, this.callback, this);
    }

    callback(webview) {
        // The 'webview' here is a WebView component object
        // Do whatever you want with webview
        // Also, note that this way the registered event cannot pass 'customEventData'
    }
}
