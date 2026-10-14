import React from "react";
import Link from "next/link";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  onOpenCurriculumModal?: (title: string) => void;
}

export default function CourseCard({ course, onOpenCurriculumModal }: CourseCardProps) {
  return (
    <article className="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none group">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-xs font-mono font-bold text-[#F5A400] tracking-wider">
            {course.code}
          </span>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span>{course.status}</span>
          </div>
        </div>

        <Link href={`/courses/${course.slug}`}>
          <h3 className="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1 group-hover:text-[#F5A400] transition-colors">
            {course.title}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
          {course.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {course.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {course.techStack.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
              +{course.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href={`/courses/${course.slug}`}
          className="w-full sm:w-auto px-6 py-3 bg-[#F5A400]/10 hover:bg-[#F5A400] text-[#F5A400] hover:text-black border border-[#F5A400]/60 font-mono text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer"
        >
          [ VIEW TRACK → ]
        </Link>
        {onOpenCurriculumModal && (
          <button
            type="button"
            onClick={() => onOpenCurriculumModal(course.title)}
            className="w-full sm:w-auto px-4 py-3 bg-black/40 hover:bg-black text-slate-300 hover:text-white border border-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-all text-center cursor-pointer"
          >
            [ SYLLABUS ]
          </button>
        )}
      </div>
    </article>
  );
}
