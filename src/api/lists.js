export async function getLists() {
  const response = await fetch(`http://localhost:5000/lists`);
  const lists = await response.json();
  return lists;
}

export async function getListsByID(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`);
  const lists = await response.json();
  return lists;
}

export async function deleteListbyID(id) {
  await fetch(`http://localhost:5000/lists/${id}`, {
    method: 'DELETE',
  });
}

export async function addNewList(content) {
  await fetch(`http://localhost:5000/lists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(content),
  });
}
