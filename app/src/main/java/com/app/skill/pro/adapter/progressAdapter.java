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

import java.util.List;

public class progressAdapter extends RecyclerView.Adapter<progressAdapter.ItemVH> {

    private final Context context;
    private final List<CourseModel> courseList;

    public interface ItemClickListener {
        void onCourseClick(CourseModel course, int position);
    }

    private ItemClickListener clickListener;

    public progressAdapter(Context context, List<CourseModel> courseList) {
        this.context = context;
        this.courseList = courseList;
    }

    @Override
    public int getItemCount() {
        return courseList.size();
    }

    public CourseModel getItem(int position) {
        return courseList.get(position);
    }

    public void setClickListener(ItemClickListener l) {
        this.clickListener = l;
    }

    @Override
    public ItemVH onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_course, parent, false);
        return new ItemVH(view);
    }

    @Override
    public void onBindViewHolder(ItemVH holder, int position) {
        CourseModel course = courseList.get(position);
        holder.courseName.setText(course.getCourseName());
        Glide.with(context).load(course.getCourseLogo()).into(holder.courseLogo);
    }

    final class ItemVH extends RecyclerView.ViewHolder implements View.OnClickListener {
        TextView courseName;
        ImageView courseLogo;

        ItemVH(View v) {
            super(v);
            courseName = v.findViewById(R.id.course_name);
            courseLogo = v.findViewById(R.id.course_logo);
            v.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            if (clickListener != null && getAdapterPosition() != RecyclerView.NO_POSITION) {
                clickListener.onCourseClick(courseList.get(getAdapterPosition()), getAdapterPosition());
            }
        }
    }
}
