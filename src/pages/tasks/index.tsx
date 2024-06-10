import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Tasks() {
  // https://report-work.onrender.com/user

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://report-work.onrender.com/user').then((res) => {
      setData(res.data)
    })
  }, [])

  console.log('data', data)

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              DANH SÁCH NHÂN VIÊN{' '}
            </h2>
            {/* <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p> */}
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={data} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  )
}
