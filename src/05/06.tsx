// const callback = (): number => {
//     alert('hey')
//     return 12;
// }

// window.setTimeout(callback, 1000)

export const User = () => {
    const deleteUser = () => {
        alert('user have been deleted');
    }

    const saveUser = () => {
        alert('user have been saved');
    }


    return <div>Roma
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}