export const style = {
  plate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    background: 'rgba(255,255,255,0.1)',
    padding: '10px',
    borderRadius: '5px',
    h2: {
      margin: 0,
    }
  },

  deg: {
    fontSize: '74px',
    fontWeight: 'bold',
    lineHeight: '100%'
  },

  wrapper: {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
  },


  desc: {
    fontSize: '20px',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    // width: '100%',
    margin: '0px auto'
  },

  plateExtended: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems: 'center',
    color: '#fff',
    background: 'rgba(255,255,255,0.1)',
    padding: '10px',
    borderRadius: '5px',
    // gridColumn: 'span 2',
    h2: {
      margin: 0,
    },

    span: {
      lineHeight: '150%',
      fontSize: '18px',
      color: 'rgba(255,255,255,0.9)',
      letterSpacing: '1px',
      marginBottom: '10px',
    }
  },

  navButton: {
    width: '100%',
    padding: '15px',
    background: 'rgba(255,255,255,0.5)',
    marginTop: '10px',
  }
}