import Layout from './navbar'
import './styles/layout.css'

export default function DashboardLayout({ children }) {
    return <section>
        <Layout children={children} />
    </section>
}