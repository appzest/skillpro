package com.app.skill.pro.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.app.skill.pro.Model.SectionModel;
import com.app.skill.pro.R;
import com.app.skill.pro.classes.SectionPrefs;

import java.util.List;

public class courseSectionsAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private static final int TYPE_SECTION = 0;
    private static final int TYPE_PRO_LABEL = 1;

    private final List<SectionModel> sectionList;
    private final LayoutInflater inflater;
    private final Context context;
    private final int courseId;

    private ItemClickListener clickListener;

    public courseSectionsAdapter(Context context, List<SectionModel> sections, int courseId) {
        this.inflater = LayoutInflater.from(context);
        this.sectionList = sections;
        this.context = context;
        this.courseId = courseId;
    }

    @Override
    public int getItemCount() {
        return sectionList.size();
    }

    public SectionModel getItem(int position) {
        return sectionList.get(position);
    }

    @Override
    public int getItemViewType(int position) {
        if ("pro_label".equalsIgnoreCase(sectionList.get(position).getType())) {
            return TYPE_PRO_LABEL;
        } else {
            return TYPE_SECTION;
        }
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        if (viewType == TYPE_PRO_LABEL) {
            View view = inflater.inflate(R.layout.item_pro_separator, parent, false);
            return new ProLabelViewHolder(view);
        } else {
            View view = inflater.inflate(R.layout.item_course_sections, parent, false);
            return new SectionViewHolder(view);
        }
    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
        SectionModel model = sectionList.get(position);

        if (holder instanceof SectionViewHolder) {
            SectionViewHolder sectionHolder = (SectionViewHolder) holder;
            sectionHolder.sectionTitle.setText(model.getTitle());
            sectionHolder.texticon.setText(model.getIcon());


            // Skip lock logic for PRO labels and PRO sections
            if ("pro_label".equalsIgnoreCase(model.getType()) || "pro".equalsIgnoreCase(model.getType())) {
                sectionHolder.lockorunlocked.setImageResource(R.drawable.locked); // keep locked icon for "pro" if needed
                sectionHolder.itemView.setAlpha(1f);
                sectionHolder.itemView.setOnClickListener(null); // prevent clicks if you want
                return;
            }

            int completedIndex = SectionPrefs.getCompletedSection(context, courseId);
            boolean isLocked = position > completedIndex;


            if (position > completedIndex) {
                // Locked section
                sectionHolder.lockorunlocked.setImageResource(R.drawable.locked);
                sectionHolder.lockorunlocked.setRotation(0);
                sectionHolder.itemView.setAlpha(0.8f); // faded look
            } else if (position == completedIndex) {
                // Next to start (current target)
                sectionHolder.lockorunlocked.setImageResource(R.drawable.back);
                sectionHolder.lockorunlocked.setRotation(180);
                sectionHolder.itemView.setAlpha(1f);
            } else {
                // Already completed
                sectionHolder.lockorunlocked.setImageResource(R.drawable.completed); // ✅ completed tick icon
                sectionHolder.lockorunlocked.setRotation(0);
                sectionHolder.itemView.setAlpha(1f);
            }


            sectionHolder.itemView.setOnClickListener(v -> {
                if (!isLocked && clickListener != null) {
                    clickListener.onItemClick(v, position);
                }
            });
        }
    }

    public class SectionViewHolder extends RecyclerView.ViewHolder {
        TextView sectionTitle , texticon;
        ImageView lockorunlocked;

        public SectionViewHolder(View itemView) {
            super(itemView);
            sectionTitle = itemView.findViewById(R.id.sectionTitle);
            lockorunlocked = itemView.findViewById(R.id.lockorunlocked);
            texticon = itemView.findViewById(R.id.texticon);
        }
    }

    public class ProLabelViewHolder extends RecyclerView.ViewHolder {
        public ProLabelViewHolder(View itemView) {
            super(itemView);
        }
    }

    public void setClickListener(ItemClickListener listener) {
        this.clickListener = listener;
    }

    public interface ItemClickListener {
        void onItemClick(View view, int position);
    }
}
