package com.app.skill.pro.classes;

import android.os.Handler;
import android.widget.TextView;

public class TypeWriter {

    private final TextView textView;
    private CharSequence text;
    private int index;
    private long delay = 20; // typing speed

    private final Handler handler = new Handler();
    private OnTypingCompleteListener typingCompleteListener;

    public TypeWriter(TextView textView) {
        this.textView = textView;
    }

    public void setCharacterDelay(long millis) {
        delay = millis;
    }

    public void animateText(CharSequence txt) {
        text = txt;
        index = 0;
        textView.setText("");
        handler.removeCallbacks(characterAdder);
        handler.postDelayed(characterAdder, delay);
    }

    private final Runnable characterAdder = new Runnable() {
        @Override
        public void run() {
            textView.setText(text.subSequence(0, index++));
            if (index <= text.length()) {
                handler.postDelayed(this, delay);
            } else if (typingCompleteListener != null) {
                typingCompleteListener.onTypingComplete();
            }
        }
    };

    public void setOnTypingCompleteListener(OnTypingCompleteListener listener) {
        this.typingCompleteListener = listener;
    }

    public interface OnTypingCompleteListener {
        void onTypingComplete();
    }
}
