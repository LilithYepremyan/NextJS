import Image from "next/image"
import { getAllCourses } from "../api"
import Link from "next/link"

export const CourseList = () => {
    const items = getAllCourses()

    return <>
        <div className="columns">
            {
                items.map(course => <div className="coloumn is-two-fifths mx-6" key={course.id}>
                    <Image
                        src={course.cover}
                        width={100}
                        height={100}
                        alt=""
                    />
                    <p>{course.name} <small>for {course.duration} months</small></p>
                    <strong>{course.price} AMD/month</strong>
                    <br/>
                    <Link href={"/courses/"+course.id}>details</Link>
                </div>)
            }
        </div>

    </>
}