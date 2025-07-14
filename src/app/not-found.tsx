import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Página Não Encontrada</h2>
      <p>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <Link href="/">
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}