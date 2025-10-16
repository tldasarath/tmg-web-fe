"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar, User, MessageSquare, Send } from "lucide-react";

export const ScheduleModal = ({ selectedDate, onClose }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [manualDate, setManualDate] = useState(selectedDate.fullDate);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const todayISO = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const dateToUse = showCalendar ? manualDate : selectedDate.fullDate;
      const url = `https://wa.me/919999999999?text=Hello, I'd like to schedule a meeting on ${dateToUse}.%0AName: ${name}%0AMessage: ${message}`;
      window.open(url, "_blank");
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50, rotateX: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 50, rotateX: -20 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5,
        }}
        className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#49051E]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />

        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-5 right-5 text-gray-400 hover:text-[#49051E] transition-colors z-10"
        >
          <X size={24} />
        </motion.button>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block bg-gradient-to-br from-[#49051E] to-[#7a2240] p-3 rounded-2xl mb-4 shadow-lg"
          >
            <Calendar className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#49051E] to-[#7a2240] bg-clip-text text-transparent">
            Schedule Meeting
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Let's plan your next discussion
          </p>
        </motion.div>

        {/* Date Selector */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          {!showCalendar ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-[#49051E]/10 to-purple-500/10 rounded-xl p-4 border border-[#49051E]/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Calendar className="w-5 h-5 text-[#49051E]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Selected Date</p>
                    <p className="font-bold text-[#49051E]">
                      {selectedDate.day}, {selectedDate.date}{" "}
                      {selectedDate.month}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalendar(true)}
                  className="text-xs bg-white text-[#49051E] px-4 py-2 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
                >
                  Change
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              <input
                type="date"
                value={manualDate}
                min={todayISO}
                onChange={(e) => setManualDate(e.target.value)}
                className="border-2 border-[#49051E]/30 rounded-xl px-4 py-3 w-full text-[#49051E] focus:outline-none focus:ring-2 focus:ring-[#49051E] focus:border-transparent transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCalendar(false)}
                className="text-sm text-[#49051E] font-medium hover:underline"
              >
                ← Back to selected date
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-6"
        >
          <div className="relative bg-white rounded-xl border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="text-black bg-transparent rounded-xl pl-12 pr-4 py-3 w-full focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="relative bg-white rounded-xl border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Your message or agenda..."
              className="text-black rounded-xl pl-12 pr-4 py-3 w-full h-28 resize-none focus:outline-none bg-transparent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

        </motion.div>

        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-gradient-to-r from-[#49051E] to-[#7a2240] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50"
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
