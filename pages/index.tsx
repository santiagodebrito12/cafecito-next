
import { Layout } from '@/components/layout';
import { Tittle } from '@/components/ui/Tittle';
import { Section1 } from '@/components/ui';
import { Section2 } from '@/components/ui';
export default function Home() {
  return (
    <Layout>

    <Tittle/>
    <div className='seccion1-bg'>
    <Section1/>
    </div>

   <Section2/>

    </Layout>
  )
}
