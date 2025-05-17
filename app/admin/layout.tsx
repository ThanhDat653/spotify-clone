import { Dashboard } from '@/pages/admin/dashboard'

export default function Layout({ children }: { children: React.ReactNode }) {
    return <Dashboard>{children}</Dashboard>
}
