package com.app.skill.pro.adapter;


import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.app.skill.pro.Model.CourseModel;
import com.app.skill.pro.R;
import com.bumptech.glide.Glide;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class courseAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    /* ---------- view-type constants ---------- */
    public static final int TYPE_HEADER = 0;
    public static final int TYPE_ITEM   = 1;

    private final Context context;
    private final List<Object> displayList = new ArrayList<>();

    /* ---------- click listener ---------- */
    public interface ItemClickListener {
        void onCourseClick(CourseModel course, int position);
    }
    private ItemClickListener clickListener;   // set by Fragment/Activity

    /* ---------- constructor ---------- */
    public courseAdapter(Context context, List<CourseModel> originalList) {
        this.context = context;

        // group by tag
        Map<String, List<CourseModel>> grouped = new LinkedHashMap<>();
        for (CourseModel m : originalList) {
            String tag = m.getTag() != null ? m.getTag() : "Other";
            grouped.computeIfAbsent(tag, k -> new ArrayList<>()).add(m);
        }
        // flatten -> header, items…
        for (Map.Entry<String, List<CourseModel>> e : grouped.entrySet()) {
            displayList.add(e.getKey());          // header
            displayList.addAll(e.getValue());     // items
        }
    }

    /* ---------- helper ---------- */
    public CourseModel getItem(int position) {
        return (CourseModel) displayList.get(position);   // call only for TYPE_ITEM!
    }
    public void setClickListener(ItemClickListener l) { this.clickListener = l; }

    /* ---------- adapter overrides ---------- */
    @Override public int getItemCount() { return displayList.size(); }
    @Override public int getItemViewType(int pos) {
        return (displayList.get(pos) instanceof CourseModel) ? TYPE_ITEM : TYPE_HEADER;
    }

    @Override public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent,int viewType) {
        LayoutInflater inf = LayoutInflater.from(context);
        if (viewType == TYPE_HEADER) {
            return new HeaderVH(inf.inflate(R.layout.item_section_header, parent,false));
        } else {
            return new ItemVH(inf.inflate(R.layout.item_course, parent,false));
        }
    }

    @Override public void onBindViewHolder(RecyclerView.ViewHolder holder,int pos) {
        if (holder instanceof HeaderVH) {
            ((HeaderVH) holder).title.setText((String) displayList.get(pos));
        } else {
            CourseModel m = (CourseModel) displayList.get(pos);
            ItemVH vh = (ItemVH) holder;
            vh.courseName.setText(m.getCourseName());
            Glide.with(context).load(m.getCourseLogo()).into(vh.courseLogo);
        }
    }

    /* ---------- view-holders ---------- */
    static final class HeaderVH extends RecyclerView.ViewHolder {
        TextView title;
        HeaderVH(View v){ super(v); title = v.findViewById(R.id.section_title); }
    }

    final class ItemVH extends RecyclerView.ViewHolder implements View.OnClickListener {
        TextView courseName; ImageView courseLogo;
        ItemVH(View v){
            super(v);
            courseName = v.findViewById(R.id.course_name);
            courseLogo  = v.findViewById(R.id.course_logo);
            v.setOnClickListener(this);           // click only for item rows
        }
        @Override public void onClick(View v){
            if (clickListener == null) return;
            int pos = getAdapterPosition();
            if (pos == RecyclerView.NO_POSITION)  return;
            clickListener.onCourseClick(getItem(pos), pos);
        }
    }
}
