import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeActive} from "./03_02";

let student: StudentType;
beforeEach(() => {
        student = {
            id: 1,
            name: "Roma",
            age: 37,
            isActive: true,
            address: {
                streetTitle: "Belinskogo 54",
                city: {
                    title: "Minsk",
                    countryTitle: "Belarus"
                }
            },
            technologies: [
                {
                    id: 1,
                    title: "HTML",
                },
                {
                    id: 2,
                    title: "JS",
                },
                {
                    id: 3,
                    title: "CSS",
                }
            ]
        }
    }
)

test("new tech skill should be added to student", () => {
        expect(student.technologies.length).toBe(3);

        addSkill(student, "React")

        expect(student.technologies.length).toBe(4);
        expect(student.technologies[3].title).toBe("React")
        expect(student.technologies[3].id).toBeDefined()
    }
)

test("student should be active", () => {
        expect(student.isActive).toBe(true);

       makeActive(student)
    expect(student.isActive).toBe(true);
    }
)

test("does student live in Minsk", () => {
    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");
    expect(result1).toBe(false)
    expect(result2).toBe(true)
}
)