export default function Page() {
    return(
      <>
        <h1>Здравствуйте, {localStorage.getItem('name')}</h1>
      </>
    )
  }
  