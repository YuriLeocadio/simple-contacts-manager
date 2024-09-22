import { useState } from "react";
import { Aside } from "./components/Aside"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"

function App() {
  const [editContact, setEditContact] = useState(null);

  return (
    <>
      <Header />
      <Aside editContact={editContact} setEditContact={setEditContact} />
      <Contact setEditContact={setEditContact} />
    </>
  )
}

export default App
