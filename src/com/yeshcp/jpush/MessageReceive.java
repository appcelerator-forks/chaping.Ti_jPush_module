package com.yeshcp.jpush;

import android.content.BroadcastReceiver;  
import android.content.Context;  
import android.content.Intent;

public class MessageReceive extends BroadcastReceiver{
	 @Override  
     public void onReceive(Context context, Intent intent) {	
    	JpushModule._onMessageReceived(intent,context); //接收到消息后调用回调
    	
     }  
}
