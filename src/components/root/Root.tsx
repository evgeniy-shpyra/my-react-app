import React from "react"
import "./root.scss"
import { Header } from "../header"
import { Sidebar } from "../sidebar"
import { Main } from "../main"

export const Root: React.FC = () => {
    return (
        <div className='wrapper'>
            <header className='wrapper__header'>
                <Header />
            </header>

            <div className='wrapper__content content'>
                <aside className='content__sidebar'>
                    <Sidebar />
                </aside>
                <main className='content__main'>
                    <Main />
                </main>
            </div>
        </div>
    )
}
