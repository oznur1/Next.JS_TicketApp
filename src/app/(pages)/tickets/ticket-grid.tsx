import { FC } from "react";
import React from "react";
import { getTickets } from "../../../utils/service";

const TicketsGrid: FC = async () => {
  const { tickets } = await getTickets();

  // ticket'ların benzersiz kategorilerinden bir dizi oluştur
  const categories = [...new Set(tickets.map((ticket) => ticket.category))];

  return (
    <div>
      {categories.map((category, key) => {
        // ekrana basılacak category'nin ticket'larını bul
        const categoryTickets = tickets
          .filter((ticket) => ticket.category === category)
          .sort(
            (b, a) =>
              new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime()
          );

        return (
          <div key={key} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-100 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full" />
                {category}
              </h2>

              <span className="text-gray-300">
                {categoryTickets.length} ticket
              </span>
            </div>

            {/* Ticketlar listeleniyor */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryTickets.map((ticket, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 p-4 rounded-lg border border-zinc-700"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {ticket.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{ticket.description}</p>

                  <div className="mt-3 flex justify-between text-sm text-gray-300">
                    <span>Öncelik: {ticket.priority}</span>
                    <span>İlerleme: {ticket.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketsGrid;
