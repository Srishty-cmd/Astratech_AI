import type { Metadata } from "next";
import CourseGrid from "@/components/courses/CourseGrid";

export const metadata: Metadata = {
  title: "Courses — AstraTech AI",
  description:
    "Courses at AstraTech AI — Build skills that you can actually build with. 6 engineering tracks in Jamshedpur.",
};

export default function CoursesPage() {
  return <CourseGrid />;
}
