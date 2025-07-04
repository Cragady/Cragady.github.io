import './CertificateBadge.css';

export default function CertificateBadge() {
  return (
    <div className='badge mt-5' >
      <a href='https://www.youracclaim.com/badges/d41a41a4-1de2-48d4-8d46-545d4ff49c9b/public_url' target='_blank' rel='noopener noreferrer'>
        <img className='img-fluid badge-img' src='/images/badge/badge-coding-bootcamp-trilogy.png' alt='certificate badge' />
      </a>
    </div>
  )
}
