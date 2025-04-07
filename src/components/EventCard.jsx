export default function EventCard({ event }) {
    return (
        <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mt-1 shadow-sm">
            <strong>{event.title}</strong>
            <div>{event.time}</div>
        </div>
    );
}
