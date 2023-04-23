import React from "react"
import "./table.scss"

const data: any[] = [
    { name: "Alex", secondName: "Sh", age: 25, children: true },
    { name: "Evgen", age: 11 },
]

const columnNames: string[] = ["name", "secondName", "age", "children"]

interface TableProps {}

export const Table: React.FC<TableProps> = () => {
    const [tableData, setTableData] = React.useState<any[]>([])
    const [tableColumnTemplateStyle, setTableColumnTemplateStyle] =
        React.useState("")

    React.useEffect(() => {
        setTableColumnTemplateStyle(`repeat(${columnNames.length}, auto)`)
    }, [columnNames])

    React.useEffect(() => {
        data.forEach((item) => {
            setTableData((prev) => [...prev, new Map(Object.entries(item))])
        })
    }, [data])

    return (
        <div className='table'>
            <div
                className='table__body'
                style={{ gridTemplateColumns: tableColumnTemplateStyle }}
            >
                {columnNames.map((name) => (
                    <div key={name} className='table__item_title'>
                        {name}
                    </div>
                ))}
                {tableData.map((row, rowIndex) =>
                    Array.from(
                        { length: columnNames.length },
                        (_, columnIndex) => (
                            <div
                                key={`${rowIndex},${columnIndex}`}
                                className='table__item'
                            >
                                {String(row.get(columnNames[columnIndex]))}
                            </div>
                        )
                    )
                )}
            </div>
        </div>
    )
}
