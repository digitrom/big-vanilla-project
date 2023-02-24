import React, {ChangeEvent, MouseEvent} from "react";

// const callback = (): number => {
//     alert('hey')
//     return 12;
// }

// window.setTimeout(callback, 1000)

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name);
    }

    const saveUser = () => {
        alert('user have been saved');
    }
    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed " + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return <div><textarea onBlur={focusLostHandler} onChange={onNameChanged}>Roma</textarea>
        <input type={"number"} onChange={onAgeChanged} onBlur={focusLostHandler}/>

        {/*<button*/}
        {/*    name={"delete"}*/}
        {/*    tabIndex={0}*/}
        {/*    onBlur={focusLostHandler}*/}
        {/*    onClick={deleteUser}>delete*/}
        {/*</button>*/}
        <button
            name={"save"}
            onClick={saveUser}>save</button>


        {/*<div tabIndex={1} onClick={deleteUser}>delete</div>*/}
        {/*<div tabIndex={0} onClick={saveUser}>save</div>*/}
        {/* tabIndex через клавишу TAB меняет фокус и переключаеся между дивками*/}
    </div>
}