import Tab from "./index.jsx"

export default function TestTab(){

    const data = [
        {
            label:"Tab 1",
            content : <div>This is Tab 1</div>
        },
        {
            label:"Tab 2",
            content:<div>This is Tab 2</div>
        },
        {
            label:"Tab 3",
            content:<div>This is Tab 3</div>
        }
    ]

    return <Tab tabdata={data}/>
}