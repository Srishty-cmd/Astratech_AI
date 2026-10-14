import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseDetails from "@/components/courses/CourseDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found — AstraTech AI" };

  return {
    title: `${course.title} (${course.code}) — AstraTech AI`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetails course={course} />;
}
