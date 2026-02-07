function Filter({ setFilter }) {
  return (
    <div>
      <h2>Filtrer les films</h2>

      <input
        placeholder="Rechercher par titre"
        onChange={e =>
          setFilter(prev => ({ ...prev, title: e.target.value }))
        }
      />

      <input
        type="number"
        placeholder="Note minimale"
        onChange={e =>
          setFilter(prev => ({ ...prev, rate: Number(e.target.value) }))
        }
      />
    </div>
  );
}

export default Filter;
