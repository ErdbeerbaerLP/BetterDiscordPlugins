/**
 * @name Friend Invite URL
 * @author ErdbeerbaerLP
 * @description Adds a button to quickly copy your friend url. You can send said url to others, so they can add you as a friend, even if you disabled friend requests entirely
 * @version 1.0.1
 * @invite f9uKgQjyhJ
 * @donate https://paypal.me/erdbeerbaerlp
 * @source https://github.com/ErdbeerbaerLP/BetterDiscordPlugins/blob/master/FriendInviteURL/FriendInviteURL.plugin.js
 * @updateUrl https://raw.githubusercontent.com/ErdbeerbaerLP/BetterDiscordPlugins/master/FriendInviteURL/FriendInviteURL.plugin.js
 * @license MIT
 */
/*@cc_on
@if (@_jscript)

var shell = WScript.CreateObject("WScript.Shell");
shell.Popup("It looks like you've mistakenly tried to run me directly. That's not how you install plugins. \n(So don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);


@else@*/

const text = document.createElement("span")
text.innerHTML="Copy Friend URL"
const button = document.createElement("div", {"id": "friendURL"}).appendChild(text);

const handleMutation = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const deeplyNestedChild = document.querySelector('.addFriend__80542');
            if (deeplyNestedChild) {
                if (!deeplyNestedChild.parentNode.contains(button)) {
                    button.setAttribute("class", deeplyNestedChild.getAttribute("class"))
                    button.onclick = () => {
                        webpackChunkdiscord_app.push([[[Math.floor(Math.random() * (10000 - 1 + 1)) + 1]],{},q=>Object.values(q.c).find(e=>e.exports?.Z?.createFriendInvite).exports.Z.createFriendInvite().then((o)=>{
                            DiscordNative.clipboard.copy("https://discord.gg/"+o.code);
                            BdApi.UI.showToast("Friend Invite URL copied to clipboard!")
                        })])
                    }
                    deeplyNestedChild.parentNode.appendChild(button)
                }
            }
        }
    }
};

const observer = new MutationObserver(handleMutation);
module.exports = class FriendInviteURL {


    load() {

    }

    start() {
        const targetNode = document.getElementById('app-mount');

        const config = {childList: true, subtree: true};

        observer.observe(targetNode, config);

    }

    stop() {
        observer.disconnect();
    }
};
