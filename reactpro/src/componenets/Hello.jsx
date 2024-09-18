function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.emoji} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;

// jsx = javascript extension
// {} javascript code inside
// return single root element only so if you want to return mutliple wrap it around one element i.e. <div>
// props = data ??
// (props) or ({name, message}) destructure
// props are read only so you can't overwrite them
