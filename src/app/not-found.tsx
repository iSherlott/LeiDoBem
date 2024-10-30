
'use client'

import { Button, Typography } from 'antd'
import { useEffect } from 'react'
import { useApp } from '../hooks/app'
import { useRouter } from '@/hooks/router'

export default function NotFound () {

    const { updateLayout, setLoading } = useApp()

    const router = useRouter()

    useEffect(() => {
        updateLayout({
            footer: false,
            header: false,
            navbar: false,
            sider: false
        })

        setLoading(false)
    }, [])

    return (
        <div style={{ display: 'flex', height: '100%', width: '100%', background: '#F5F5F5' }}>


            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', gap: '15px' }}>

                <div>
                    <svg width="252" height="295" viewBox="0 0 252 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1349_14825)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 127.832V125.737C0 56.7909 55.892 0.898926 124.838 0.898926H126.934C195.88 0.898926 251.772 56.7909 251.772 125.737V127.833C251.772 196.779 195.88 252.671 126.934 252.671H124.838C55.892 252.672 0 196.779 0 127.833" fill="#E4EBF7" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M39.755 131.34C39.6543 132.428 39.3392 133.485 38.8279 134.45C38.3165 135.416 37.6191 136.27 36.7759 136.965C35.9326 137.659 34.9602 138.18 33.9146 138.497C32.8691 138.814 31.7712 138.921 30.6843 138.811C29.5973 138.702 28.5428 138.378 27.5815 137.859C26.6203 137.34 25.7713 136.635 25.0836 135.786C24.396 134.937 23.8831 133.961 23.5748 132.913C23.2664 131.865 23.1686 130.766 23.287 129.68C23.5236 127.509 24.6083 125.52 26.3048 124.146C28.0012 122.772 30.172 122.124 32.3443 122.343C34.5166 122.562 36.5143 123.63 37.9024 125.315C39.2904 127 39.9563 129.166 39.755 131.34Z" fill="white" />
                            <path d="M48.3731 147.008L35.7251 157.796M36.9751 134.797L47.4571 140.74L36.9751 134.797Z" stroke="white" strokeWidth="2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M39.8749 159.852C39.7242 161.347 38.9857 162.722 37.8218 163.673C36.6578 164.624 35.1638 165.073 33.6684 164.923C32.173 164.772 30.7986 164.033 29.8477 162.869C28.8968 161.705 28.4472 160.211 28.5979 158.716C28.6725 157.976 28.8922 157.257 29.2445 156.602C29.5967 155.946 30.0747 155.366 30.651 154.895C31.2273 154.425 31.8908 154.072 32.6034 153.857C33.316 153.643 34.0639 153.571 34.8044 153.646C35.5448 153.72 36.2634 153.94 36.9189 154.292C37.5745 154.644 38.1542 155.122 38.625 155.699C39.0959 156.275 39.4486 156.938 39.663 157.651C39.8775 158.364 39.9495 159.112 39.8749 159.852ZM57.5879 143.747C57.5188 144.498 57.3018 145.227 56.9493 145.893C56.5967 146.56 56.1158 147.149 55.5341 147.629C54.9524 148.108 54.2815 148.468 53.5602 148.686C52.8389 148.905 52.0814 148.979 51.3314 148.903C50.5814 148.828 49.8539 148.604 49.1907 148.246C48.5275 147.888 47.9419 147.401 47.4676 146.816C46.9933 146.23 46.6397 145.556 46.4273 144.833C46.2149 144.109 46.1478 143.351 46.2299 142.602C46.3939 141.106 47.1423 139.735 48.3122 138.788C49.4821 137.84 50.9788 137.394 52.4764 137.545C53.9741 137.696 55.3515 138.432 56.3088 139.594C57.2661 140.755 57.7258 142.248 57.5879 143.747ZM99.0179 27.375L128.838 27.361C129.44 27.3608 130.037 27.242 130.593 27.0113C131.15 26.7805 131.655 26.4425 132.081 26.0163C132.507 25.5902 132.845 25.0844 133.075 24.5277C133.306 23.9711 133.424 23.3745 133.424 22.772C133.424 22.1696 133.305 21.5731 133.074 21.0166C132.843 20.4601 132.505 19.9545 132.079 19.5286C131.653 19.1028 131.147 18.765 130.591 18.5347C130.034 18.3043 129.437 18.1858 128.835 18.186L99.0149 18.199C98.4124 18.1992 97.8158 18.3181 97.2593 18.5488C96.7027 18.7796 96.197 19.1177 95.7711 19.5439C95.3452 19.9701 95.0074 20.476 94.7771 21.0327C94.5467 21.5894 94.4282 22.186 94.4284 22.7885C94.4286 23.391 94.5475 23.9876 94.7782 24.5442C95.009 25.1007 95.3471 25.6064 95.7732 26.0323C96.1994 26.4582 96.7053 26.796 97.262 27.0264C97.8187 27.2568 98.4154 27.3752 99.0179 27.375ZM110.424 45.711L140.244 45.698C141.449 45.6797 142.598 45.1881 143.444 44.3293C144.289 43.4706 144.763 42.3136 144.762 41.1086C144.762 39.9035 144.287 38.747 143.441 37.889C142.595 37.0309 141.445 36.5403 140.24 36.523L110.42 36.536C109.817 36.5363 109.221 36.6552 108.664 36.886C108.108 37.1168 107.602 37.4549 107.177 37.8811C106.751 38.3073 106.413 38.8131 106.183 39.3698C105.953 39.9265 105.834 40.5231 105.834 41.1255C105.835 41.728 105.954 42.3245 106.184 42.8809C106.415 43.4374 106.753 43.943 107.179 44.3688C107.606 44.7946 108.112 45.1323 108.668 45.3626C109.225 45.5929 109.821 45.7113 110.424 45.711Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M112.798 27.361V27.359L128.582 27.353C127.974 27.3442 127.37 27.4565 126.806 27.6832C126.241 27.9099 125.727 28.2465 125.294 28.6735C124.861 29.1006 124.517 29.6094 124.283 30.1705C124.048 30.7317 123.927 31.3338 123.928 31.942C123.928 32.5502 124.049 33.1523 124.284 33.7133C124.519 34.2743 124.863 34.7829 125.297 35.2096C125.73 35.6364 126.244 35.9727 126.808 36.199C127.373 36.4254 127.977 36.5372 128.585 36.528L112.802 36.535V36.533C114.018 36.5325 115.184 36.0488 116.044 35.1884C116.904 34.328 117.386 33.1613 117.386 31.945C117.385 30.7287 116.902 29.5625 116.041 28.7028C115.181 27.8431 114.014 27.3605 112.798 27.361ZM184.523 136.168C183.97 141.653 179.076 145.651 173.592 145.098C168.107 144.545 164.109 139.65 164.662 134.166C165.214 128.681 170.109 124.683 175.594 125.236C181.079 125.789 185.077 130.683 184.524 136.168" fill="white" />
                            <path d="M193.006 156.977L177.751 169.988M179.26 142.25L191.9 149.417L179.26 142.25Z" stroke="white" strokeWidth="2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M184.668 170.557C184.588 171.458 184.33 172.334 183.909 173.134C183.488 173.935 182.912 174.644 182.215 175.22C181.518 175.796 180.713 176.228 179.848 176.491C178.983 176.755 178.074 176.843 177.174 176.752C176.274 176.662 175.401 176.393 174.606 175.963C173.81 175.532 173.108 174.948 172.54 174.244C171.973 173.54 171.55 172.73 171.297 171.862C171.044 170.994 170.967 170.084 171.068 169.185C171.27 167.398 172.168 165.762 173.568 164.633C174.968 163.503 176.756 162.971 178.546 163.152C180.336 163.332 181.982 164.211 183.128 165.597C184.274 166.983 184.827 168.765 184.668 170.557ZM203.34 153.825C203.256 154.73 202.994 155.61 202.569 156.413C202.143 157.216 201.563 157.927 200.862 158.505C200.16 159.083 199.351 159.516 198.481 159.78C197.611 160.043 196.698 160.132 195.793 160.041C194.889 159.95 194.012 159.68 193.212 159.248C192.412 158.816 191.706 158.23 191.134 157.524C190.562 156.817 190.135 156.005 189.879 155.133C189.623 154.261 189.541 153.347 189.64 152.443C189.837 150.638 190.74 148.983 192.151 147.84C193.563 146.697 195.368 146.158 197.175 146.34C198.982 146.523 200.644 147.412 201.799 148.813C202.953 150.215 203.507 152.017 203.34 153.825Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M151.931 192.824C151.931 193.413 151.697 193.979 151.28 194.395C150.863 194.812 150.298 195.046 149.709 195.046C149.12 195.046 148.554 194.812 148.138 194.395C147.721 193.979 147.487 193.413 147.487 192.824C147.487 192.235 147.721 191.67 148.138 191.253C148.554 190.836 149.12 190.602 149.709 190.602C150.298 190.602 150.863 190.836 151.28 191.253C151.697 191.67 151.931 192.235 151.931 192.824V192.824ZM225.27 116.556C225.27 117.146 225.036 117.711 224.619 118.128C224.202 118.544 223.637 118.779 223.047 118.779C222.458 118.779 221.893 118.544 221.476 118.128C221.059 117.711 220.825 117.146 220.825 116.556C220.825 115.967 221.059 115.402 221.476 114.985C221.892 114.568 222.458 114.334 223.047 114.334C223.636 114.334 224.201 114.568 224.618 114.985C225.035 115.402 225.269 115.967 225.269 116.556H225.27ZM216.38 151.58C216.38 151.872 216.322 152.161 216.21 152.431C216.099 152.7 215.935 152.945 215.728 153.152C215.522 153.358 215.277 153.522 215.007 153.634C214.737 153.745 214.448 153.803 214.156 153.803C213.864 153.803 213.575 153.745 213.306 153.633C213.036 153.521 212.791 153.358 212.585 153.151C212.378 152.945 212.214 152.7 212.103 152.43C211.991 152.16 211.934 151.871 211.934 151.579C211.934 150.99 212.168 150.424 212.585 150.007C213.002 149.59 213.567 149.356 214.157 149.356C214.746 149.356 215.312 149.59 215.729 150.007C216.146 150.424 216.38 150.99 216.38 151.579V151.58ZM176.917 108.136C176.923 108.432 176.87 108.726 176.761 109.001C176.652 109.276 176.49 109.527 176.283 109.738C176.076 109.95 175.829 110.118 175.556 110.233C175.283 110.347 174.99 110.406 174.694 110.406C174.398 110.406 174.106 110.347 173.833 110.233C173.56 110.118 173.313 109.95 173.106 109.738C172.899 109.527 172.736 109.276 172.627 109.001C172.518 108.726 172.466 108.432 172.472 108.136C172.484 107.555 172.724 107.002 173.139 106.595C173.555 106.188 174.113 105.96 174.694 105.96C175.276 105.96 175.834 106.188 176.249 106.595C176.665 107.002 176.904 107.555 176.917 108.136ZM195.291 92.6651C195.297 92.9609 195.244 93.2551 195.135 93.5302C195.027 93.8053 194.864 94.056 194.657 94.2674C194.45 94.4788 194.203 94.6468 193.93 94.7615C193.657 94.8762 193.364 94.9353 193.068 94.9353C192.772 94.9353 192.479 94.8762 192.207 94.7615C191.934 94.6468 191.687 94.4788 191.48 94.2674C191.273 94.056 191.11 93.8053 191.001 93.5302C190.892 93.2551 190.84 92.9609 190.846 92.6651C190.858 92.0838 191.098 91.5305 191.513 91.1238C191.929 90.717 192.487 90.4893 193.068 90.4893C193.65 90.4893 194.208 90.717 194.623 91.1238C195.039 91.5305 195.278 92.0838 195.291 92.6651V92.6651ZM202.058 181.211C202.058 181.801 201.824 182.366 201.407 182.783C200.99 183.2 200.424 183.434 199.835 183.434C199.245 183.434 198.68 183.2 198.263 182.783C197.846 182.366 197.612 181.801 197.612 181.211C197.612 180.622 197.846 180.056 198.263 179.639C198.68 179.222 199.245 178.988 199.835 178.988C200.424 178.988 200.99 179.222 201.407 179.639C201.824 180.056 202.058 180.622 202.058 181.211V181.211Z" stroke="white" strokeWidth="2" />
                            <path d="M220.824 117.75L207.984 125.651L192.674 117.749V94.8901M214.404 153.802L212.492 173.986L201.564 179.976L214.404 153.802ZM173.661 175.292L167.305 185.106H155.945L151.437 191.59L173.661 175.292ZM174.941 125.668V109.864V125.668Z" stroke="white" strokeWidth="2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M166.588 66.4362H162.637C161.38 66.4327 160.176 65.9321 159.287 65.0435C158.399 64.155 157.898 62.9509 157.894 61.6942C157.897 60.4373 158.398 59.2329 159.287 58.3442C160.176 57.4554 161.38 56.9546 162.637 56.9512H166.588C167.845 56.9546 169.049 57.4554 169.938 58.3442C170.827 59.2329 171.328 60.4373 171.331 61.6942C171.327 62.9509 170.826 64.155 169.938 65.0435C169.049 65.9321 167.845 66.4327 166.588 66.4362Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M174.823 30.5298C174.823 14.2488 188.021 1.0498 204.303 1.0498C220.583 1.0498 233.783 14.2488 233.783 30.5298C233.783 46.8098 220.583 60.0098 204.303 60.0098C188.021 60.0098 174.823 46.8098 174.823 30.5298Z" fill="#1890FF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M205.952 38.8868C206.452 39.3868 206.737 40.0288 206.737 40.8148C206.737 41.6008 206.451 42.2798 205.952 42.7788C205.38 43.2788 204.738 43.5288 203.952 43.5288C203.167 43.5288 202.523 43.2438 202.023 42.7438C201.451 42.2438 201.203 41.6008 201.203 40.8148C201.203 40.0288 201.451 39.3868 202.023 38.8868C202.523 38.3868 203.167 38.1368 203.953 38.1368C204.738 38.1368 205.415 38.3868 205.952 38.8868ZM210.237 19.4238C211.665 20.6728 212.38 22.3868 212.38 24.5658C212.38 26.2778 211.953 27.6958 211.161 28.8158C211.094 28.9118 211.024 28.9958 210.943 29.0808C210.527 29.5098 209.533 30.4268 207.987 31.7798C207.385 32.2483 206.897 32.8465 206.559 33.5298C206.198 34.2625 206.014 35.07 206.023 35.8868V36.3868H201.916V35.8868C201.916 34.5298 202.131 33.3508 202.63 32.3868C203.094 31.4228 204.487 29.9228 206.808 27.8508L207.238 27.3508C207.881 26.5658 208.202 25.7078 208.202 24.8158C208.202 23.6358 207.844 22.7078 207.202 22.0308C206.524 21.3508 205.559 21.0298 204.344 21.0298C202.808 21.0298 201.702 21.4938 200.987 22.4598C200.617 22.9598 200.366 23.5948 200.227 24.3638C200.141 24.823 199.896 25.2375 199.536 25.5353C199.176 25.833 198.723 25.9953 198.256 25.9938H198.252C196.975 25.9938 195.995 24.8108 196.272 23.5638C196.609 22.0458 197.292 20.7838 198.345 19.7798C199.881 18.2798 201.952 17.5298 204.595 17.5298C206.915 17.5298 208.809 18.1368 210.237 19.4238Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M52.0398 76.6309C52.0398 76.6309 73.8498 81.9909 79.3468 92.5759C84.9218 103.316 72.9948 101.836 63.6168 97.5109C52.7568 92.5029 38.9168 85.6889 52.0398 76.6309Z" fill="#FFB594" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M90.4829 68.0041L90.0339 70.8971C89.2809 71.3871 85.2859 68.2341 85.2859 68.2341L83.6409 68.9821L82.2949 63.2981C82.2949 63.2981 89.1099 58.7091 91.2119 58.2801C93.6639 57.7791 101.096 59.2201 101.912 60.5581C101.912 60.5581 103.232 61.0441 99.6849 61.2481C96.1369 61.4511 94.6419 61.6951 92.8949 64.3801C91.1479 67.0661 90.4829 68.0041 90.4829 68.0041Z" fill="#FFC6A0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M128.055 111.867C125.428 104.143 121.905 98.6868 119.138 96.3888C115.638 93.4828 109.798 94.1638 107.772 92.2018C106.502 90.9708 104.557 91.0048 104.557 91.0048C104.557 91.0048 89.5771 87.8468 87.7291 87.5258C85.3591 87.1158 85.6051 86.8118 81.6751 86.1208C80.1051 84.2138 78.7581 84.9988 78.7581 84.9988L71.6481 83.6158C70.7951 82.1438 69.2251 82.5928 69.2251 82.5928L66.7571 81.6958C65.1121 91.6718 59.0171 95.4918 59.0171 95.4918C60.8121 96.6138 74.7201 103.792 74.7201 103.792L79.8271 140.902C79.8271 140.902 76.5061 146.596 81.1731 150.011C81.1731 150.011 101.056 146.268 116.094 149.682C116.094 149.682 119.141 147.136 117.066 140.876C117.589 137.866 118.46 132.613 118.802 129.254C119.187 130.026 120.821 131.172 121.942 132.731C121.942 132.731 131.349 125.366 132.994 118.719C132.162 117.996 131.396 117.134 130.727 116.266C130.16 115.53 130.369 114.21 129.962 113.549C129.293 112.465 128.158 112.171 128.055 111.867Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M101.09 290.498C101.09 290.498 105.385 292.539 108.444 291.519C111.265 290.579 112.974 292.187 115.524 292.697C118.074 293.207 122.398 293.797 127.21 291.437C127.107 285.927 120.321 287.457 115.25 284.724C112.687 283.344 111.466 280.002 111.652 275.925H102.25C102.25 275.925 100.858 286.445 101.09 290.498Z" fill="#CBD1D1" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M101.067 290.326C101.067 290.326 103.495 291.597 107.826 290.979C110.884 290.542 111.538 291.46 115.249 292.01C118.961 292.56 125.973 291.941 127.072 291.116C127.485 292.216 126.729 293.179 126.729 293.179C126.729 293.179 125.217 293.782 121.917 294.003C119.887 294.139 116.117 294.294 114.31 293.5C112.523 292.125 109.063 291.597 108.582 293.259C104.664 294.209 101.227 292.973 101.227 292.973L101.067 290.326Z" fill="#2B0849" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M108.341 276.544H111.435C111.435 276.544 111.332 283.246 115.971 285.102C111.331 285.72 107.413 282.799 108.341 276.544Z" fill="#A4AABA" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M57.5418 272.901C57.5418 272.901 55.4348 280.317 53.0568 285.207C51.2588 288.902 48.8318 292.699 58.5218 292.699C65.1698 292.699 67.4748 292.219 65.9448 286.1C64.4148 279.98 66.2108 272.901 66.2108 272.901H57.5418Z" fill="#CBD1D1" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M51.4759 290.293C51.4759 290.293 53.5729 291.462 58.1089 291.462C64.1919 291.462 66.3579 289.812 66.3579 289.812C66.3579 289.812 66.9599 290.926 65.7389 291.977C64.7459 292.832 62.1419 293.568 58.3489 293.523C54.2039 293.475 52.5169 292.957 51.6129 292.355C50.7879 291.805 50.9259 290.775 51.4759 290.293Z" fill="#2B0849" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M58.4192 274.804C58.4192 274.804 58.4522 276.323 58.1052 277.734C57.7562 279.154 57.0272 280.838 56.9752 281.873C56.9172 283.024 61.5122 283.453 62.1302 281.907C62.7502 280.36 63.4242 275.48 64.0432 274.655C64.6622 273.83 59.1402 272.536 58.4192 274.805" fill="#A4AABA" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M99.6599 279.014L113.038 279.106C113.038 279.106 114.336 224.586 114.891 214.703C115.445 204.821 118.667 171.339 115.893 151.575L103.346 150.931L80.4969 151.711C80.4969 151.711 80.0629 155.677 79.3019 161.687C79.2389 162.183 78.6199 162.53 78.5529 163.052C78.4779 163.637 78.9759 164.406 78.8729 165.018C76.5089 179.098 72.4959 198.122 70.1289 211.695C70.0129 212.361 68.8949 212.704 68.6709 214.386C68.6309 214.688 68.8819 215.911 68.7829 216.181C61.9099 234.925 57.8339 264.023 54.5059 278.066L69.1129 278.052C69.1129 278.052 71.3099 269.482 73.1429 261.082C75.9539 248.196 96.2539 176.072 96.2539 176.072L99.2699 175.551L100.313 221.901C100.313 221.901 100.089 223.135 100.65 223.921C101.21 224.706 100.09 225.044 100.258 226.165L100.65 227.959C100.65 227.959 100.201 235.137 99.7519 239.849C99.3039 244.559 99.6599 279.014 99.6599 279.014Z" fill="#7BB2F9" />
                            <path d="M106.36 225.642C106.36 225.642 109.134 224.532 112.463 221.759M76.085 222.126C77.238 222.22 80.123 220.107 83.04 217.191L76.085 222.126Z" stroke="#648BD8" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M107.275 222.6C107.275 222.6 110.048 221.49 113.377 218.716" stroke="#648BD8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M56.1201 274.918H69.4301M74.7401 225.267C74.7401 225.267 77.3621 224.676 81.2451 221.902L74.7401 225.267ZM86.0301 152.134C85.7601 155.24 86.3301 160.659 81.6941 161.257L86.0301 152.134ZM103.625 150.38C103.625 150.38 103.735 164.392 102.332 165.445C100.113 167.109 99.3421 167.389 99.3421 167.389L103.625 150.38ZM99.7901 150.938C99.7901 150.938 99.8251 163.818 98.5941 175.315L99.7901 150.938ZM93.6731 176.411C93.6731 176.411 100.885 174.747 103.104 174.747L93.6731 176.411ZM74.3101 206.361C74.0005 207.884 73.6742 209.405 73.3311 210.921C73.3311 210.921 71.8731 212.753 72.3221 214.697C72.7711 216.641 71.3751 216.742 67.3371 230.052C65.6411 235.642 62.8471 248.643 60.9891 257.649L60.7581 258.769L74.3101 206.361ZM75.6891 198.307C75.4071 199.894 75.1131 201.478 74.8071 203.061L75.6891 198.307ZM82.5911 152.733L81.3951 163.2C81.3951 163.2 80.2981 163.35 80.8951 165.444C81.0081 166.79 78.2211 181.219 75.7151 195.874L82.5911 152.733Z" stroke="#648BD8" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M116.241 148.72C116.241 148.72 99.1942 145.616 80.3482 148.92C80.5062 151.434 80.3452 153.07 80.3452 153.07C80.3452 153.07 95.0322 150.252 116.015 152.758C116.267 150.403 116.241 148.72 116.241 148.72Z" fill="#192064" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M106.322 151.665L106.325 146.754C106.326 146.544 106.246 146.341 106.101 146.189C105.956 146.037 105.757 145.947 105.547 145.939C103.107 145.848 100.481 145.831 97.711 145.925C97.4996 145.933 97.2993 146.022 97.1522 146.174C97.0051 146.326 96.9226 146.529 96.922 146.74L96.919 151.646C96.9185 151.755 96.9398 151.862 96.9817 151.962C97.0235 152.062 97.085 152.153 97.1625 152.228C97.24 152.304 97.3319 152.364 97.4328 152.403C97.5337 152.443 97.6416 152.462 97.75 152.459C100.135 152.399 102.723 152.395 105.48 152.476C105.589 152.48 105.697 152.462 105.799 152.422C105.901 152.383 105.993 152.324 106.072 152.249C106.15 152.173 106.213 152.083 106.256 151.983C106.299 151.883 106.321 151.775 106.322 151.666" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M105.207 150.733L105.209 147.657C105.21 147.49 105.146 147.329 105.03 147.208C104.915 147.088 104.757 147.017 104.59 147.011C102.635 146.947 100.679 146.943 98.7238 147.001C98.5554 147.006 98.3956 147.076 98.2781 147.197C98.1605 147.318 98.0945 147.479 98.0938 147.648V150.72C98.0932 150.805 98.1098 150.89 98.1426 150.969C98.1754 151.048 98.2237 151.12 98.2847 151.18C98.3457 151.24 98.4181 151.287 98.4976 151.319C98.5771 151.35 98.6622 151.366 98.7478 151.364C100.679 151.321 102.611 151.325 104.542 151.375C104.904 151.385 105.207 151.095 105.207 150.733Z" fill="#192064" />
                            <path d="M100.986 175.465L101.884 220.107C101.884 220.107 102.557 221.677 101.659 222.799C100.762 223.921 104.127 223.472 102.557 225.042C100.987 226.612 103.454 226.164 102.557 228.407C101.961 229.896 101.563 249.507 101.461 263.553M100.263 275.915H112.601H100.263ZM101.436 271.03C101.442 274.417 101.478 276.82 101.547 277.536L101.436 271.03ZM101.451 265.048C101.443 266.494 101.438 267.939 101.436 269.385L101.451 265.048Z" stroke="#648BD8" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M46.8758 83.9271C46.8758 83.9271 46.3598 89.9721 54.0988 89.4791C65.2988 88.7671 63.3168 80.1341 85.6388 67.8241C84.8528 65.1161 83.1918 63.0801 83.1918 63.0801C83.1918 63.0801 72.1238 66.1901 60.6078 71.1261C53.8418 74.0261 47.2128 77.4781 46.8758 83.9271ZM104.46 91.5571L105.401 86.1851L96.5168 74.7551L91.4798 80.1271L89.7398 87.9611C89.7263 88.0192 89.7292 88.0799 89.7483 88.1364C89.7674 88.193 89.8018 88.243 89.8478 88.2811C90.8128 89.0811 96.3478 93.2941 104.195 91.8251C104.261 91.8123 104.321 91.7799 104.368 91.7321C104.416 91.6842 104.447 91.6232 104.459 91.5571" fill="#FFC6A0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M93.9418 79.8868C93.9418 79.8868 89.4089 77.0338 91.5099 73.0318C93.1329 69.9418 96.0229 74.1648 96.0229 74.1648C96.0229 74.1648 96.5428 70.5228 99.1438 70.5228C99.6638 69.4828 100.705 66.3608 100.705 66.3608C100.705 66.3608 112.15 68.9618 114.231 69.4818C114.231 74.6848 111.927 88.9058 106.391 89.3428C97.4988 90.0458 93.9418 79.8868 93.9418 79.8868Z" fill="#FFC6A0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M113.874 73.9461C116.475 71.8651 117.344 64.2241 117.344 64.2241C117.344 64.2241 114.865 63.7341 110.704 62.1741C106.021 60.0931 97.9061 57.4271 93.2241 63.1501C83.5561 66.3731 91.1741 82.9731 91.1741 82.9731L93.8871 79.9521C93.8871 79.9521 89.9521 76.6651 91.8071 73.7091C93.9771 70.2471 95.7271 74.7821 95.7271 74.7821C95.7271 74.7821 96.3641 72.3951 99.3081 71.4401C99.6631 70.7301 100.344 68.7661 100.74 67.5901C100.825 67.3365 101.002 67.1237 101.235 66.9935C101.469 66.8632 101.743 66.8249 102.003 66.8861C104.403 67.4441 110.68 68.9051 113.359 69.5481C113.881 69.6731 114.23 70.1631 114.179 70.6981L113.874 73.9461Z" fill="#520038" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M104.977 76.5639C104.874 77.1739 104.395 77.6019 103.907 77.5199C103.418 77.4369 103.106 76.8759 103.209 76.2659C103.312 75.6559 103.791 75.2279 104.279 75.3099C104.767 75.3919 105.079 75.9539 104.977 76.5639ZM112.132 78.1939C112.029 78.8039 111.55 79.2319 111.062 79.1499C110.574 79.0669 110.262 78.5059 110.364 77.8959C110.467 77.2859 110.946 76.8579 111.434 76.9399C111.922 77.0219 112.234 77.5829 112.132 78.1939Z" fill="#552950" />
                            <path d="M110.13 75.3398L109.234 76.9498L108.936 81.3068H106.708" stroke="#DB836E" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M110.846 74.981C110.846 74.981 112.636 74.265 113.352 75.518" stroke="#5C2552" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M92.3862 74.7819C92.3862 74.7819 92.8632 73.6679 93.4992 74.0659C94.1362 74.4639 94.7732 75.4989 94.0572 76.0559C93.3402 76.6119 94.2162 77.7259 94.2162 77.7259" stroke="#DB836E" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M103.287 73.4297C103.287 73.4297 105.117 74.5427 107.424 74.3837" stroke="#5C2552" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M94.6929 81.7051C94.6929 81.7051 97.0009 89.1051 105.117 89.3441M103.685 82.2621C103.685 82.2621 105.912 83.4551 108.061 83.4551L103.685 82.2621ZM104.64 84.8081C104.64 84.8081 105.594 85.2061 106.151 85.1261L104.64 84.8081Z" stroke="#DB836E" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M68.9999 83.1538C68.9999 83.1538 68.2739 92.4358 60.7959 97.3598M81.4499 89.8838C81.4499 89.8838 81.8999 95.5308 76.5149 102.671L81.4499 89.8838Z" stroke="#E4EBF7" strokeWidth="1.101" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M129.405 123.365C129.405 123.365 124.133 130.768 119.983 134.133" stroke="#E4EBF7" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M119.306 107.829C119.306 107.829 119.758 112.195 117.179 139.891" stroke="#E4EBF7" strokeWidth="1.101" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M150.028 151.732H100.191C99.9233 151.732 99.6664 151.626 99.477 151.436C99.2876 151.247 99.1812 150.99 99.1812 150.722V119.034C99.1812 118.477 99.6332 118.024 100.191 118.024H150.028C150.586 118.024 151.038 118.477 151.038 119.034V150.722C151.038 150.99 150.932 151.247 150.742 151.436C150.553 151.626 150.296 151.732 150.028 151.732Z" fill="#F2D7AD" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M150.29 151.732H130.427V118.025H151.211V150.811C151.211 151.055 151.114 151.289 150.941 151.461C150.769 151.634 150.535 151.731 150.291 151.731" fill="#F4D19D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.554 128.396H92.9168C92.8218 128.396 92.7286 128.37 92.6473 128.321C92.5661 128.272 92.4999 128.201 92.456 128.117C92.4122 128.033 92.3923 127.938 92.3986 127.844C92.4049 127.749 92.4371 127.658 92.4918 127.58L98.8718 118.467C99.0648 118.19 99.3818 118.025 99.7218 118.025H130.814L123.554 128.396Z" fill="#F2D7AD" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.689 128.947H99.25V128.428H123.419L130.602 118.168L131.026 118.466L123.689 128.947Z" fill="#CC9B6E" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M158.298 128.396H139.629C139.307 128.396 138.989 128.321 138.701 128.177C138.413 128.033 138.163 127.824 137.97 127.566L130.814 118.025H150.779C151.269 118.025 151.729 118.255 152.023 118.647L158.713 127.567C158.771 127.644 158.806 127.736 158.814 127.832C158.823 127.927 158.805 128.024 158.762 128.11C158.719 128.196 158.652 128.269 158.571 128.319C158.489 128.37 158.394 128.397 158.298 128.397" fill="#F4D19D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M157.847 128.979H138.463L130.606 118.504L131.021 118.194L138.721 128.46H157.847V128.979ZM130.554 151.185L130.522 143.008L131.041 143.006L131.073 151.183L130.554 151.185Z" fill="#CC9B6E" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M130.511 140.283L130.431 118.869L130.95 118.867L131.03 140.281L130.511 140.283ZM111.876 141.432L111.378 141.289L112.857 136.122L113.355 136.265L111.876 141.432ZM108.437 141.56L105.758 138.625L108.423 135.191L108.833 135.509L106.436 138.598L108.82 141.21L108.437 141.56ZM116.607 141.56L116.224 141.21L118.607 138.598L116.21 135.509L116.62 135.191L119.285 138.625L116.607 141.56Z" fill="#CC9B6E" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M154.316 132.392L151.202 130.432L151.24 133.946L150.197 134.038C148.515 134.153 146.563 134.268 145.408 134.268C143.506 134.268 142.715 136.526 147.638 136.916L144.993 136.32C144.993 136.32 142.825 137.637 145.497 138.62C145.497 138.62 143.917 139.837 146.058 141.2C145.474 144.704 151.305 145.258 153.18 144.79C155.056 144.32 157.413 142.431 157.667 139.63C157.947 136.545 156.777 134.198 154.317 132.392" fill="#FFC6A0" />
                            <path d="M153.686 134.077C153.686 134.077 147.164 134.547 145.326 134.449C143.49 134.351 143.422 136.639 147.685 136.713C151.424 136.863 153.136 136.669 153.136 136.669" stroke="#DB836E" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M145.16 136.377C143.31 137.723 145.721 138.732 145.721 138.732C145.721 138.732 149.199 139.63 152.451 139.349" stroke="#DB836E" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M52.8379 89.7857C56.3709 89.4487 61.2609 88.5377 66.4199 82.0317M151.89 142.21C151.89 142.21 145.61 142.321 145.16 140.078C144.937 138.732 145.61 138.676 145.61 138.676L151.89 142.21ZM146.114 141.368C146.114 141.368 145.011 144.528 151.554 144.901L146.114 141.368ZM151.202 130.432V133.909V130.432Z" stroke="#DB836E" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M168.567 248.818C166.804 248.818 165.113 248.118 163.867 246.871C162.62 245.625 161.92 243.934 161.92 242.171V175.705C161.92 174.832 162.092 173.968 162.426 173.161C162.76 172.355 163.25 171.622 163.867 171.005C164.484 170.388 165.217 169.898 166.023 169.564C166.83 169.23 167.694 169.058 168.567 169.058C169.44 169.058 170.304 169.23 171.111 169.564C171.917 169.898 172.65 170.388 173.267 171.005C173.884 171.622 174.374 172.355 174.708 173.161C175.042 173.968 175.214 174.832 175.214 175.705V242.171C175.214 243.934 174.514 245.625 173.267 246.871C172.021 248.118 170.33 248.818 168.567 248.818Z" fill="#5BA02E" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M176.543 248.153C174.78 248.153 173.09 247.452 171.843 246.206C170.597 244.959 169.897 243.269 169.897 241.506V208.274C169.886 207.394 170.05 206.521 170.379 205.705C170.708 204.889 171.196 204.147 171.815 203.521C172.433 202.895 173.169 202.398 173.981 202.059C174.793 201.72 175.664 201.545 176.543 201.545C177.423 201.545 178.294 201.72 179.106 202.059C179.918 202.398 180.654 202.895 181.272 203.521C181.891 204.147 182.378 204.889 182.708 205.705C183.037 206.521 183.201 207.394 183.19 208.274V241.506C183.19 243.269 182.49 244.96 181.243 246.206C179.997 247.453 178.306 248.153 176.543 248.153Z" fill="#92C110" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M186.443 294.113H158.92C158.075 294.113 157.264 293.777 156.666 293.18C156.069 292.582 155.733 291.771 155.733 290.926V244.792C155.733 243.947 156.069 243.136 156.666 242.538C157.264 241.941 158.075 241.605 158.92 241.605H186.444C187.289 241.605 188.1 241.941 188.697 242.538C189.295 243.136 189.631 243.947 189.631 244.792V290.926C189.631 291.771 189.295 292.582 188.697 293.18C188.1 293.777 187.289 294.113 186.444 294.113" fill="#F2D7AD" />
                            <path d="M88.979 89.98C88.979 89.98 96.755 95.364 105.579 92.822" stroke="#E4EBF7" strokeWidth="1.101" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1349_14825">
                                <rect width="252" height="294" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <Typography style={{ fontSize: '32px', fontWeight: 'bold' }}>404</Typography>
                <Typography className="greyed" style={{ fontSize: '18px' }}>Desculpe, mas a página que você está tentando acessar está indisponível ou não existe.</Typography>
                <Button onClick={() => router.redirect('/bypass')} style={{ background: '#0000A4', color: 'white', padding: '18px' }}>Voltar para página inicial</Button>
            </div>


        </div>
    )
}