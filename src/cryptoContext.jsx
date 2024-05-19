
import React, { createContext, useContext, useEffect, useState } from "react";
import Auth, { db } from "./firebase";
import { CoinList } from "./config/Api";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot, doc } from "firebase/firestore";
import { NFT__DATA } from "./config/NFT-data";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("inr");
  const [symbol, setSymbol] = useState("₹");
  const [user, setuser] = useState(null)
  const [coins, setCoins] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [watchlist, setWatchList] = React.useState([])
  const [nftWatchlist, setNftWatchlist] = React.useState([])
  const [transactionArray , setTransactionArray] = React.useState([])
  const [positiveTransaction ,setPositiveTransaction] = React.useState(true)
  const [messageArray,setMessageArray] =React.useState([])


  const fetchTrendingCoins = async () => {
    const nfts = NFT__DATA
    setLoading(true)
    const response = await fetch(CoinList(currency));
    const data = await response.json()

    // console.log(data)
    setCoins(data)
    setLoading(false)
  }


  React.useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setuser(user)
      } else {
        setuser(null)
      }
    })
  }, [])

  React.useEffect(() => {
    if (user) {
      const coinRef = doc(db, user?.uid, 'watchlist');
      var unSubscribe = onSnapshot(coinRef, (coin,nft) => {
        if (coin.exists()) {
          console.log(coin.data().coins)
          setNftWatchlist(coin.data().nfts)
          setWatchList(coin.data().coins)
        } else {
          console.log('no item in watchList');
        }
      })

      return () => {
        unSubscribe();
      }
    }
  }, [user])

  React.useEffect(() => {
    if (user) {
      const transactionRef = doc(db, user?.uid, 'transactions');
      var unSubscribe = onSnapshot(transactionRef, (t) => {
        if (t.exists()) {
         console.log(t.data().transactions)
          setTransactionArray(t.data().transactions)
        } else {
          console.log('no item in transacttion');
        }
      })

      return () => {
        unSubscribe();
      }
    }
  }, [user])

  React.useEffect(() => {
    if (user) {
      const messagesRef = doc(db, user?.uid, 'Messages');
      var unSubscribe = onSnapshot(messagesRef, (m) => {
        if (m.exists()) {
         console.log(m.data().messages)
          setMessageArray(m.data().messages)
        } else {
          console.log('there is no message currently');
        }
      })

      return () => {
        unSubscribe();
      }
    }
  }, [user])

  useEffect(() => {
    if (currency === "inr") setSymbol("₹");
    else if (currency === "usd") setSymbol("$");
    fetchTrendingCoins();
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol, user, loading, coins, watchlist,nftWatchlist,transactionArray,messageArray }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};