/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("test").addEventListener("click",test)
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function test() {
    // alert("ddd")
    // alert( ToastShow.show)
    alert(MyToast.showToast)
    MyToast.showToast("ddd")
    // cordova.plugins.MyToast.showToast("ppap")
    //   ToastShow.show("123456");
    // alert(window.plugins.toast.showWithOptions)
    // alert(window.plugins.MyToast.showToast)
    // cwindow.plugins.MyToast.showToast("ddd",function(){},function(){})
    // alert(window.plugins.MyToast.showToast)
    // window.plugins.toast.showWithOptions(
    //     {
    //       message: "hey there",
    //       duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself. 
    //       position: "bottom",
    //       addPixelsY: -40  // added a negative value to move it up a bit (default 0) 
    //     },
    //     function(){}, // optional 
    //     function(){}    // optional 
    //   );
   
    // cordova.plugins.MyToast.showToast("hello");
    // alert(JSON.stringify(cordova.plugins.Toast) )
    // cordova.plugins.Toast.showToast('Helloworld',function(){},function(){});

    // alert(navigator.toast)
    // alert(cordova.plugins.navigator)
    
}

app.initialize();